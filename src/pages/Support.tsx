
import React, { useState } from 'react'
import { MessageCircle, Phone, Mail, Search, ChevronDown, ChevronRight, Clock, CheckCircle, AlertCircle, User, FileText, Headphones } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Support: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('geral')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: '',
    priority: '',
    description: ''
  })

  const supportCategories = [
    { id: 'geral', name: 'Geral', icon: FileText },
    { id: 'pedidos', name: 'Pedidos', icon: CheckCircle },
    { id: 'pagamento', name: 'Pagamento', icon: AlertCircle },
    { id: 'entrega', name: 'Entrega', icon: Clock },
    { id: 'produto', name: 'Produtos', icon: User },
    { id: 'garantia', name: 'Garantia', icon: Headphones }
  ]

  const faqData = {
    geral: [
      {
        id: 1,
        question: 'Como criar uma conta no Gomes Marketplace?',
        answer: 'Para criar uma conta, clique em "Conta" no menu superior e selecione "Criar Conta". Preencha seus dados pessoais e confirme seu email.'
      },
      {
        id: 2,
        question: 'Como alterar meus dados pessoais?',
        answer: 'Acesse sua conta, vá em "Meu Perfil" e clique em "Editar Informações". Você pode alterar nome, email, telefone e endereço.'
      },
      {
        id: 3,
        question: 'Como recuperar minha senha?',
        answer: 'Na página de login, clique em "Esqueci minha senha" e informe seu email. Você receberá um link para redefinir sua senha.'
      }
    ],
    pedidos: [
      {
        id: 4,
        question: 'Como acompanhar meu pedido?',
        answer: 'Acesse "Meus Pedidos" na sua conta. Lá você encontra o status atualizado e código de rastreamento de todos os seus pedidos.'
      },
      {
        id: 5,
        question: 'Posso cancelar um pedido?',
        answer: 'Sim, você pode cancelar pedidos que ainda não foram processados. Acesse "Meus Pedidos" e clique em "Cancelar" ao lado do pedido desejado.'
      },
      {
        id: 6,
        question: 'Como alterar o endereço de entrega?',
        answer: 'O endereço só pode ser alterado antes do processamento do pedido. Entre em contato conosco imediatamente após realizar o pedido.'
      }
    ],
    pagamento: [
      {
        id: 7,
        question: 'Quais formas de pagamento vocês aceitam?',
        answer: 'Aceitamos cartões de crédito (Visa, Mastercard, Elo), débito, PIX, boleto bancário e parcelamento em até 12x sem juros.'
      },
      {
        id: 8,
        question: 'Quando é cobrado o pagamento?',
        answer: 'Para cartão de crédito e PIX, a cobrança é imediata. Para boleto, após a confirmação do pagamento pelo banco.'
      },
      {
        id: 9,
        question: 'Como funciona o parcelamento?',
        answer: 'Oferecemos parcelamento em até 12x sem juros no cartão de crédito para compras acima de R$ 500.'
      }
    ],
    entrega: [
      {
        id: 10,
        question: 'Qual o prazo de entrega?',
        answer: 'O prazo varia conforme sua localização: Capitais (1-3 dias úteis), Interior (3-7 dias úteis), Regiões remotas (5-10 dias úteis).'
      },
      {
        id: 11,
        question: 'Vocês entregam em todo o Brasil?',
        answer: 'Sim, entregamos em todo território nacional. Algumas regiões remotas podem ter prazo estendido.'
      },
      {
        id: 12,
        question: 'Como funciona o frete grátis?',
        answer: 'Frete grátis para compras acima de R$ 299 nas regiões Sul e Sudeste, e acima de R$ 499 para demais regiões.'
      }
    ],
    produto: [
      {
        id: 13,
        question: 'Como saber se um produto é compatível?',
        answer: 'Consulte as especificações técnicas na página do produto ou entre em contato com nosso suporte técnico especializado.'
      },
      {
        id: 14,
        question: 'Vocês oferecem instalação?',
        answer: 'Oferecemos serviço de instalação para alguns produtos. Consulte disponibilidade na página do produto ou contate-nos.'
      },
      {
        id: 15,
        question: 'Como funciona a troca de produtos?',
        answer: 'Você tem 7 dias para trocar produtos sem uso. O produto deve estar na embalagem original com todos os acessórios.'
      }
    ],
    garantia: [
      {
        id: 16,
        question: 'Qual a garantia dos produtos?',
        answer: 'Todos os produtos têm garantia do fabricante. Processadores e placas de vídeo: 3 anos. Demais componentes: 1-2 anos conforme fabricante.'
      },
      {
        id: 17,
        question: 'Como acionar a garantia?',
        answer: 'Entre em contato conosco com o número do pedido e descrição do problema. Avaliaremos e direcionaremos para o fabricante se necessário.'
      },
      {
        id: 18,
        question: 'A garantia cobre que tipos de defeitos?',
        answer: 'A garantia cobre defeitos de fabricação e falhas no funcionamento normal. Não cobre danos físicos ou mau uso.'
      }
    ]
  }

  const currentFAQs = faqData[activeCategory as keyof typeof faqData] || []

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Central de Suporte
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Estamos aqui para ajudar você com qualquer dúvida ou problema
            </motion.p>
            
            {/* Quick Contact Options */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto"
            >
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span>Chat ao Vivo</span>
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(11) 99999-9999</span>
              </button>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Abrir Ticket</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h2>
              
              {/* FAQ Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {supportCategories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeCategory === category.id
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{category.name}</span>
                    </button>
                  )
                })}
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {currentFAQs.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {openFAQ === faq.id ? (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {openFAQ === faq.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-6 pb-4"
                        >
                          <p className="text-gray-600">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Options */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Fale Conosco</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <div className="font-medium text-gray-900">Chat ao Vivo</div>
                    <div className="text-sm text-gray-600">Resposta imediata</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">(11) 99999-9999</div>
                    <div className="text-sm text-gray-600">Seg-Sex: 8h às 18h</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <Mail className="h-6 w-6 text-purple-600" />
                  <div>
                    <div className="font-medium text-gray-900">suporte@gomes.com.br</div>
                    <div className="text-sm text-gray-600">Resposta em até 24h</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Create Ticket Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Abrir Ticket de Suporte</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="Descreva brevemente o problema"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categoria
                  </label>
                  <select
                    value={ticketForm.category}
                    onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Selecione uma categoria</option>
                    <option value="pedido">Problema com Pedido</option>
                    <option value="produto">Problema com Produto</option>
                    <option value="pagamento">Problema com Pagamento</option>
                    <option value="entrega">Problema com Entrega</option>
                    <option value="garantia">Garantia</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prioridade
                  </label>
                  <select
                    value={ticketForm.priority}
                    onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Selecione a prioridade</option>
                    <option value="baixa">Baixa</option>
                    <option value="media">Média</option>
                    <option value="alta">Alta</option>
                    <option value="urgente">Urgente</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição
                  </label>
                  <textarea
                    value={ticketForm.description}
                    onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="Descreva detalhadamente o problema"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Enviar Ticket
                </button>
              </form>
            </div>

            {/* Support Hours */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Horários de Atendimento</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Segunda a Sexta:</span>
                  <span className="font-medium">8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado:</span>
                  <span className="font-medium">9h às 15h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo:</span>
                  <span className="font-medium">Fechado</span>
                </div>
                <div className="pt-3 border-t">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">Online agora</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Self-Service Resources */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Recursos de Autoatendimento</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <FileText className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Guias e Tutoriais</h3>
              <p className="text-gray-600 mb-4">Aprenda a usar nossos produtos com guias detalhados</p>
              <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                Acessar Guias →
              </button>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Status do Sistema</h3>
              <p className="text-gray-600 mb-4">Verifique se nossos serviços estão funcionando</p>
              <button className="text-green-600 hover:text-green-700 font-medium">
                Ver Status →
              </button>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Search className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Base de Conhecimento</h3>
              <p className="text-gray-600 mb-4">Encontre respostas na nossa base de artigos</p>
              <button className="text-purple-600 hover:text-purple-700 font-medium">
                Buscar Artigos →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
