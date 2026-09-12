const entourageGroups = [
  {
    title: 'BRIDE',
    members: [
      { name: 'Socorro Domingo', nickname: 'Cory', status: 'Accepted', relation: 'Mother', remarks: 'Parents of the Bride' },
      { name: 'Ervin Domingo', nickname: 'Ervin', status: 'Accepted', relation: 'Father', remarks: 'Parents of the Bride' },
    ],
  },
  {
    title: 'GROOM',
    members: [
      { name: 'Elisa Pacaldo', nickname: 'Elisa', status: 'Accepted', relation: 'Mother', remarks: 'Parents of the Groom' },
    ],
  },
  {
    title: 'PRINCIPAL SPONSORS',
    members: [
      { name: 'Ludevico Domingo', nickname: 'Ding', status: 'Accepted', relation: 'Uncle of Bride', remarks: 'Ninong' },
      { name: 'Paquito Regalado', nickname: 'Paqz', status: 'Accepted', relation: 'Katiwala ng Purok', remarks: 'Ninong' },
      { name: 'Erman Juancho', nickname: 'Dondon', status: 'Accepted', relation: 'Katiwala ng Grupo ni Groom', remarks: 'Ninong' },
      { name: 'Jaycee Santos', nickname: 'JC', status: 'Accepted', relation: 'Choirmate Bride', remarks: 'Ninong' },
      { name: 'Ricardo Rey Cruz', nickname: 'Rey', status: 'Accepted', relation: 'Boss ni Groom', remarks: 'Ninong' },
      { name: 'Luisa Domingo', nickname: 'Lisa', status: 'Accepted', relation: 'Auntie of Bride', remarks: 'Ninang' },
      { name: 'Leny Regalado', nickname: 'Leny', status: 'Accepted', relation: 'Wife of Katiwala ng Purok', remarks: 'Ninang' },
      { name: 'Neriza Fajardo', nickname: 'Neri', status: 'Accepted', relation: 'Katiwala ng Grupo ni Groom', remarks: 'Ninang' },
      { name: 'Charlyn Santos', nickname: 'Cha', status: 'Accepted', relation: 'Choirmate Bride', remarks: 'Ninang' },
      { name: 'Lorena Nedic', nickname: 'Lorena', status: 'Accepted', relation: 'Lola of Groom', remarks: 'Ninang' },
    ],
  },
  {
    title: 'BEST MAN',
    members: [
      { name: 'Ludevico Domingo Jr', nickname: 'Jhay', status: 'Accepted', relation: 'Cousin of the Bride', remarks: 'Groomsmen' },
      { name: 'John Mark Peroche', nickname: 'MacMac', status: 'Accepted', relation: 'Cousin of the Groom', remarks: 'Groomsmen' },
      { name: 'Eyrone Gie Fernandez', nickname: 'Gie', status: 'Accepted', relation: 'Friend', remarks: 'Groomsmen' },
      { name: 'Ken Rhogel Villapeña', nickname: 'Ken', status: 'Accepted', relation: 'Friend', remarks: 'Groomsmen' },
      { name: 'Aristotle Agustin', nickname: 'Aries', status: 'Accepted', relation: 'Friend', remarks: 'Groomsmen' },
    ],
  },
  {
    title: 'MAID OF HONOR',
    members: [
      { name: 'Karina Domingo', nickname: 'Karen', status: 'Accepted', relation: 'Sister of the Bride', remarks: 'Bridesmaids' },
      { name: 'Kyla Nicole Peroche', nickname: 'Kyla', status: 'Accepted', relation: 'Cousin of the Groom', remarks: 'Bridesmaids' },
      { name: 'Rhobelyn Fernandez', nickname: 'Rhob', status: 'Accepted', relation: 'Friend', remarks: 'Bridesmaids' },
      { name: 'Maria Patricia Fernando', nickname: 'Mia', status: 'Accepted', relation: 'Friend', remarks: 'Bridesmaids' },
      { name: 'Melisa Agda', nickname: 'Mel', status: 'Accepted', relation: 'Friend', remarks: 'Flower Girl' },
    ],
  },
  {
    title: 'FLOWER GIRL',
    members: [
      { name: 'Rome Cassie Santos', nickname: 'Cassie', status: 'Accepted', relation: "Friend's Daughter", remarks: 'Flower Girl' },
    ],
  },
  {
    title: 'RING BEARER',
    members: [
      { name: 'Elijah Reign Fernandez', nickname: 'Eli', status: 'Accepted', relation: "Friend's Son", remarks: 'Ring Bearer' },
    ],
  },
]

export default function GuestListPage() {
  return (
    <main className="min-h-screen bg-[#f7f0ea] px-4 py-16 text-[#2d201c] md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#b85c3b]">
            Entourage
          </p>
          <h1 className="font-serif text-5xl font-light text-[#2d201c] md:text-6xl">
            Members of Entourage
          </h1>
        </div>

        <div className="space-y-8">
          {entourageGroups.map((group) => (
            <section key={group.title} className="rounded-[28px] bg-[#fffaf5] p-6 shadow-[0_18px_45px_rgba(45,32,28,0.06)] md:p-8">
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-[#b85c3b]">
                {group.title}
              </h2>

              {group.members.length === 0 ? (
                <div className="rounded-[20px] bg-[#f2e6dc] p-5 text-sm text-[#554843]">
                  To be announced.
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {group.members.map((member) => (
                    <div
                      key={`${group.title}-${member.name}`}
                      className="rounded-[22px] border border-[#efe3d8] bg-[#fffaf5] p-5 shadow-[0_12px_26px_rgba(45,32,28,0.03)]"
                    >
                      <div className="mb-3">
                        <h3 className="font-serif text-2xl text-[#2d201c]">{member.name}</h3>
                      </div>

                      <dl className="space-y-2 text-sm text-[#554843]">
                        <div>
                          <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7a655d]">Nickname</dt>
                          <dd className="mt-1">{member.nickname}</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7a655d]">Relationship to couple</dt>
                          <dd className="mt-1">{member.relation}</dd>
                        </div>
                        <div>
                          <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7a655d]">Special Remarks</dt>
                          <dd className="mt-1">{member.remarks}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#b85c3b] px-7 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#9f4f35]"
          >
            Back Home
          </a>
        </div>
      </div>
    </main>
  )
}
