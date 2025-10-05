import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Download, Play } from 'lucide-react';
import { getSessionStatus } from '@/services/stripeService';

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const [sessionStatus, setSessionStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      fetchSessionStatus();
    }
  }, [sessionId]);

  const fetchSessionStatus = async () => {
    try {
      setLoading(true);
      const status = await getSessionStatus(sessionId);
      setSessionStatus(status);
    } catch (err) {
      setError('Failed to verify payment status');
      console.error('Error fetching session status:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Verificando status do pagamento...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-2xl">✕</span>
          </div>
          <h1 className="text-2xl font-bold mb-2">Erro na Verificação</h1>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button asChild>
            <Link to="/marketplace">Voltar ao Marketplace</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold mb-4">Pagamento Realizado com Sucesso!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Obrigado pela sua compra! Você agora tem acesso aos seus cursos.
          </p>

          {/* Payment Details */}
          <div className="bg-card border rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Detalhes da Compra</h2>
            <div className="space-y-3 text-left">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status do Pagamento:</span>
                <span className="font-semibold text-green-600 capitalize">
                  {sessionStatus?.payment_status || 'Pago'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status da Sessão:</span>
                <span className="font-semibold capitalize">
                  {sessionStatus?.status || 'Completa'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">ID da Transação:</span>
                <span className="font-mono text-sm">{sessionId}</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-card border rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Próximos Passos</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-muted/30 rounded-lg">
                <Play className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Comece a Aprender</h3>
                <p className="text-sm text-muted-foreground">
                  Acesse seus cursos no painel do estudante e comece sua jornada de aprendizado.
                </p>
              </div>
              <div className="p-4 bg-muted/30 rounded-lg">
                <Download className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold mb-2">Baixe Recursos</h3>
                <p className="text-sm text-muted-foreground">
                  Acesse materiais complementares, exercícios e recursos para download.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="davinci-gradient">
              <Link to="/student-dashboard">
                Ir para Meus Cursos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/marketplace">Explorar Mais Cursos</Link>
            </Button>
          </div>

          {/* Support Info */}
          <div className="mt-8 p-4 bg-muted/30 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Precisa de ajuda? Entre em contato conosco em{' '}
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

export default CheckoutSuccess;
