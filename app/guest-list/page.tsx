import Link from 'next/link'

type EntourageMember = {
  name: string
  nickname: string
  status: string
  relation: string
  remarks: string
}

type EntourageGroup = {
  title: string
  members?: EntourageMember[]
  subgroups?: {
    title: string
    members: EntourageMember[]
  }[]
}

const entourageGroups: EntourageGroup[] = [
  {
    title: 'PARENTS OF THE BRIDE',
    members: [
      { name: 'Socorro Domingo', nickname: 'Cory', status: 'Accepted', relation: 'Mother', remarks: 'Parents of the Bride' },
      { name: 'Ervin Domingo', nickname: 'Ervin', status: 'Accepted', relation: 'Father', remarks: 'Parents of the Bride' },
    ],
  },
  {
    title: 'PARENT OF THE GROOM',
    members: [
      { name: 'Elisa Pacaldo', nickname: 'Elisa', status: 'Accepted', relation: 'Mother', remarks: 'Parents of the Groom' },
    ],
  },
  {
    title: 'PRINCIPAL SPONSORS',
    subgroups: [
      {
        title: 'NINONG',
        members: [
          { name: 'Ludevico Domingo', nickname: 'Ding', status: 'Accepted', relation: 'Uncle of Bride', remarks: 'Ninong' },
          { name: 'Paquito Regalado', nickname: 'Paqz', status: 'Accepted', relation: 'Katiwala ng Purok', remarks: 'Ninong' },
          { name: 'Erman Juancho', nickname: 'Dondon', status: 'Accepted', relation: 'Katiwala ng Grupo ni Groom', remarks: 'Ninong' },
          { name: 'Jaycee Santos', nickname: 'JC', status: 'Accepted', relation: 'Choirmate Bride', remarks: 'Ninong' },
          { name: 'Ricardo Rey Cruz', nickname: 'Rey', status: 'Accepted', relation: 'Boss ni Groom', remarks: 'Ninong' },
        ],
      },
      {
        title: 'NINANG',
        members: [
          { name: 'Luisa Domingo', nickname: 'Lisa', status: 'Accepted', relation: 'Auntie of Bride', remarks: 'Ninang' },
          { name: 'Leny Regalado', nickname: 'Leny', status: 'Accepted', relation: 'Wife of Katiwala ng Purok', remarks: 'Ninang' },
          { name: 'Neriza Fajardo', nickname: 'Neri', status: 'Accepted', relation: 'Katiwala ng Grupo ni Groom', remarks: 'Ninang' },
          { name: 'Charlyn Rose Santos', nickname: 'Cha', status: 'Accepted', relation: 'Choirmate Bride', remarks: 'Ninang' },
          { name: 'Lorena Nedic', nickname: 'Lorena', status: 'Accepted', relation: 'Lola of Groom', remarks: 'Ninang' },
        ],
      },
    ],
  },
  {
    title: 'SECONDARY SPONSORS',
    subgroups: [
      {
        title: 'BEST MAN',
        members: [
          { name: 'Ludevico Domingo Jr', nickname: 'Jhay', status: 'Accepted', relation: 'Cousin of the Bride', remarks: 'Best Man' },
        ],
      },
      {
        title: 'GROOMSMEN',
        members: [
          { name: 'John Mark Peroche', nickname: 'MacMac', status: 'Accepted', relation: 'Cousin of the Groom', remarks: 'Groomsmen' },
          { name: 'Eyrhone Gie Fernandez', nickname: 'Gie', status: 'Accepted', relation: 'Friend', remarks: 'Groomsmen' },
          { name: 'Kevin Estrella', nickname: 'Kevin', status: 'Accepted', relation: 'Friend', remarks: 'Groomsmen' },
          { name: 'Aristotle Agustin', nickname: 'Aries', status: 'Accepted', relation: 'Friend', remarks: 'Groomsmen' },
        ],
      },
      {
        title: 'MAID OF HONOR',
        members: [
          { name: 'Karina Domingo', nickname: 'Karen', status: 'Accepted', relation: 'Sister of the Bride', remarks: 'Maid of Honor' },
        ],
      },
      {
        title: 'BRIDESMAIDS',
        members: [
          { name: 'Kyla Nicole Peroche', nickname: 'Kyla', status: 'Accepted', relation: 'Cousin of the Groom', remarks: 'Bridesmaids' },
          { name: 'Rhobelyn Fernandez', nickname: 'Rhob', status: 'Accepted', relation: 'Friend', remarks: 'Bridesmaids' },
          { name: 'Glaiza Estrella', nickname: 'Glaiza', status: 'Accepted', relation: 'Friend', remarks: 'Bridesmaids' },
          { name: 'Melisa Agda', nickname: 'Mia', status: 'Accepted', relation: 'Friend', remarks: 'Bridesmaids' },
        ],
      },
    ],
  },
  {
    title: 'RING BEARER',
    members: [
      { name: 'Elijah Reign Fernandez', nickname: 'Eli', status: 'Accepted', relation: "Friend's Son", remarks: 'Ring Bearer' },
    ],
  },
  {
    title: 'FLOWER GIRL',
    members: [
      { name: 'Rome Cassie Santos', nickname: 'Cassie', status: 'Accepted', relation: "Friend's Daughter", remarks: 'Flower Girl' },
    ],
  },
]

export default function GuestListPage() {
  return (
    <main className="page-reveal min-h-screen bg-[#f7f0ea] px-4 py-16 text-[#2d201c] md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="stagger-reveal mb-12 text-center" style={{ animationDelay: '100ms' }}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#b85c3b]">
            Special Guests & Attendants
          </p>
          <h1 className="font-serif text-5xl font-light text-[#2d201c] md:text-6xl">
            Members of Entourage
          </h1>
        </div>

        <div className="space-y-8">
          {entourageGroups.map((group, index) => (
            <section
              key={group.title}
              className="stagger-reveal rounded-[28px] bg-[#fffaf5] p-6 shadow-[0_18px_45px_rgba(45,32,28,0.06)] md:p-8"
              style={{ animationDelay: `${220 + index * 90}ms` }}
            >
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-[#b85c3b]">
                {group.title}
              </h2>

              {group.subgroups ? (
                <div className="grid items-start gap-8 md:grid-cols-2">
                  {group.subgroups.map((subgroup, subgroupIndex) => (
                    <div
                      key={subgroup.title}
                      className={group.title === 'SECONDARY SPONSORS'
                        ? subgroupIndex < 2
                          ? subgroupIndex === 0
                            ? 'md:col-start-1 md:row-start-1'
                            : 'md:col-start-1 md:row-start-2'
                          : subgroupIndex === 2
                            ? 'md:col-start-2 md:row-start-1'
                            : 'md:col-start-2 md:row-start-2'
                        : ''}
                    >
                      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#7a655d]">
                        {subgroup.title}
                      </h3>
                      <div className="grid gap-3">
                        {subgroup.members.map((member) => (
                          <div
                            key={`${subgroup.title}-${member.name}`}
                            className={`px-1 py-2 ${member.remarks === 'Best Man' || member.remarks === 'Maid of Honor' ? 'rounded-lg bg-[#f2e6dc] px-4' : ''}`}
                          >
                            <h4 className={`font-serif text-base sm:text-lg ${member.remarks === 'Best Man' || member.remarks === 'Maid of Honor' ? 'font-semibold text-[#b85c3b]' : 'text-[#2d201c]'}`}>
                              {member.name}
                            </h4>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : group.members?.length === 0 ? (
                <div className="rounded-[20px] bg-[#f2e6dc] p-5 text-sm text-[#554843]">
                  To be announced.
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {group.members?.map((member) => (
                    <div
                      key={`${group.title}-${member.name}`}
                      className={`px-1 py-2 ${member.remarks === 'Best Man' || member.remarks === 'Maid of Honor' ? 'rounded-lg bg-[#f2e6dc] px-4' : ''}`}
                    >
                      <h3 className={`font-serif text-base sm:text-lg ${member.remarks === 'Best Man' || member.remarks === 'Maid of Honor' ? 'font-semibold text-[#b85c3b]' : 'text-[#2d201c]'}`}>
                        {member.name}
                      </h3>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[#b85c3b] px-7 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#9f4f35]"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  )
}
