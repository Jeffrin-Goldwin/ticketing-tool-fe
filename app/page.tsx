import TicketList from './components/ticket-list'

export default function TicketingDashboard() {
  return (
      <div className="flex-1 h-screen bg-gray-100 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Tickets</h1>
            <TicketList />
          </div>
        </main>
      </div>
  )
}

