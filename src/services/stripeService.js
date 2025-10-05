import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const createCheckoutSession = async (courseId, courseName, coursePrice) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/stripe/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        courseId,
        courseName,
        coursePrice,
        successUrl: `${window.location.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/checkout/cancel`,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const { sessionId } = await response.json();
    
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
};

export const createCheckoutSessionForCart = async (cart) => {
  try {
    // For multiple courses, we'll create a single session with all courses
    const totalPrice = cart.reduce((sum, course) => sum + course.price, 0);
    const courseNames = cart.map(course => course.title).join(', ');
    const courseIds = cart.map(course => course.id).join(',');

    const response = await fetch(`${import.meta.env.VITE_API_URL}/stripe/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        courseId: courseIds,
        courseName: courseNames,
        coursePrice: totalPrice,
        successUrl: `${window.location.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/checkout/cancel`,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const { sessionId } = await response.json();
    
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error creating checkout session for cart:', error);
    throw error;
  }
};

export const getSessionStatus = async (sessionId) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/stripe/session-status/${sessionId}`);
    
    if (!response.ok) {
      throw new Error('Failed to get session status');
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting session status:', error);
    throw error;
  }
};
