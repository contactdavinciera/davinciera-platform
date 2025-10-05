import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { XCircle, ArrowLeft, ShoppingCart } from 'lucide-react';

const CheckoutCancel = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Cancel Icon */}
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-12 h-12 text-orange-600" />
          </div>

          {/* Cancel Message */}
          <h1 className="text-3xl font-bold mb-4">Pagamento Cancelado</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Não se preocupe! Seu pagamento foi cancelado e nenhuma cobrança foi realizada.
          </p>

          {/* Information Card */}
          <div className="bg-card border rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">O que aconteceu?</h2>
            <div className="text-left space-y-3">
              <p className="text-muted-foreground">
                • Você cancelou o processo de pagamento
              </p>
              <p className="text-muted-foreground">
                • Nenhuma cobrança foi realizada em seu cartão
              </p>
              <p className="text-muted-foreground">
                • Seus cursos ainda estão disponíveis no carrinho
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-card border rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Próximos Passos</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <ShoppingCart className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Finalizar Compra</h3>
                <p className="text-sm text-muted-foreground">
                  Volte ao checkout e finalize sua compra quando estiver pronto.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <ArrowLeft className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Continuar Navegando</h3>
                <p className="text-sm text-muted-foreground">
                  Explore mais cursos em nosso marketplace antes de finalizar.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="davinci-gradient">
              <Link to="/checkout">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Finalizar Compra
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/marketplace">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Marketplace
              </Link>
            </Button>
          </div>

          {/* Support Info */}
          <div className="mt-8 p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Teve algum problema durante o checkout? Entre em contato conosco em{' '}
              <a href="mailto:support@davinciera.com" className="text-primary hover:underline">
                support@davinciera.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCancel;
