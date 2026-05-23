import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

type NavItem = {
  label: string;
  colorClass: string;
  active?: boolean;
};

type MetricCard = {
  label: string;
  value: string;
  badge: string;
  badgeClass: string;
  description: string;
};

type ServiceCard = {
  vehicle: string;
  service: string;
  status?: string;
  statusClass?: string;
  progress?: string;
};

type KanbanColumn = {
  title: string;
  count: string;
  badgeClass: string;
  cards: ServiceCard[];
};

type ScheduleItem = {
  day: string;
  title: string;
  client: string;
  badgeClass: string;
};

type ExperienceItem = {
  label: string;
  value: number;
  barClass: string;
};

type PartItem = {
  name: string;
  code: string;
  quantity: string;
  quantityClass: string;
};

type ReportItem = {
  label: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './app.html'
})
export class App {
  protected readonly navItems: NavItem[] = [
    { label: 'Dashboard', colorClass: 'bg-fuel', active: true },
    { label: 'Agendamentos', colorClass: 'bg-mint' },
    { label: 'Ordens de servico', colorClass: 'bg-sky-400' },
    { label: 'Financeiro', colorClass: 'bg-amber-300' },
    { label: 'Clientes', colorClass: 'bg-violet-300' },
    { label: 'Estoque', colorClass: 'bg-rose-300' }
  ];

  protected readonly metrics: MetricCard[] = [
    {
      label: 'Agendamentos online',
      value: '18',
      badge: '+12%',
      badgeClass: 'bg-mint/10 text-mint',
      description: '6 aguardando confirmacao'
    },
    {
      label: 'OS em andamento',
      value: '27',
      badge: '4 urgentes',
      badgeClass: 'bg-sky-100 text-sky-700',
      description: 'Media de 2h40 por servico'
    },
    {
      label: 'Faturamento do dia',
      value: 'R$ 8,7k',
      badge: 'meta 74%',
      badgeClass: 'bg-amber-100 text-amber-700',
      description: 'Ticket medio de R$ 483'
    },
    {
      label: 'Avaliacoes',
      value: '4.8',
      badge: '156 notas',
      badgeClass: 'bg-fuel/10 text-fuel',
      description: 'Tempo de resposta: 11 min'
    }
  ];

  protected readonly kanbanColumns: KanbanColumn[] = [
    {
      title: 'Recebidos',
      count: '7',
      badgeClass: 'bg-slate-100 text-ink',
      cards: [
        {
          vehicle: 'Honda Civic',
          service: 'Troca de oleo e filtro',
          status: 'Cliente aguardando',
          statusClass: 'text-fuel'
        },
        {
          vehicle: 'Fiat Toro',
          service: 'Diagnostico eletrico',
          status: 'Entrada 10:30',
          statusClass: 'text-slate-500'
        }
      ]
    },
    {
      title: 'Em execucao',
      count: '12',
      badgeClass: 'bg-sky-100 text-sky-700',
      cards: [
        { vehicle: 'Jeep Compass', service: 'Freios dianteiros', progress: '66%' },
        { vehicle: 'VW Gol', service: 'Suspensao completa', progress: '50%' }
      ]
    },
    {
      title: 'Finalizacao',
      count: '8',
      badgeClass: 'bg-mint/10 text-mint',
      cards: [
        {
          vehicle: 'Toyota Corolla',
          service: 'Checklist de entrega',
          status: 'Pronto para retirada',
          statusClass: 'text-mint'
        },
        {
          vehicle: 'Chevrolet Onix',
          service: 'Aguardando pagamento',
          status: 'R$ 690 pendente',
          statusClass: 'text-amber-700'
        }
      ]
    }
  ];

  protected readonly scheduleItems: ScheduleItem[] = [
    {
      day: '09',
      title: 'Revisao completa',
      client: 'Mariana Alves - 14:00',
      badgeClass: 'bg-fuel'
    },
    {
      day: '11',
      title: 'Alinhamento',
      client: 'Bruno Lima - 15:30',
      badgeClass: 'bg-road'
    }
  ];

  protected readonly experienceItems: ExperienceItem[] = [
    { label: 'Cadastro/Login', value: 86, barClass: 'bg-mint' },
    { label: 'Acompanhamento', value: 78, barClass: 'bg-sky-500' },
    { label: 'Historico', value: 91, barClass: 'bg-fuel' }
  ];

  protected readonly parts: PartItem[] = [
    { name: 'Pastilha de freio', code: 'PF-204', quantity: '8 un.', quantityClass: 'text-fuel' },
    { name: 'Filtro de oleo', code: 'FO-118', quantity: '34 un.', quantityClass: 'text-mint' },
    { name: 'Amortecedor', code: 'AM-330', quantity: '12 un.', quantityClass: 'text-amber-700' }
  ];

  protected readonly reports: ReportItem[] = [
    { label: 'Servicos por tecnico' },
    { label: 'Fluxo de caixa' },
    { label: 'Satisfacao do cliente' }
  ];

  protected readonly financeBars = [
    { height: '45%', colorClass: 'bg-slate-200' },
    { height: '62%', colorClass: 'bg-sky-400' },
    { height: '75%', colorClass: 'bg-mint' },
    { height: '58%', colorClass: 'bg-fuel' },
    { height: '88%', colorClass: 'bg-road' },
    { height: '69%', colorClass: 'bg-amber-400' }
  ];
}
