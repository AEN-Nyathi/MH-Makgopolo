import Image from 'next/image';

const teamMembers = [
  {
    name: 'M.H. Makgopolo',
    role: 'Founder & CEO',
    image: '/securityGuard.jpg',
  },
  {
    name: 'Jane Doe',
    role: 'Training Manager',
    image: '/securityGuard.jpg',
  },
  {
    name: 'John Smith',
    role: 'Lead Instructor',
    image: '/securityGuard.jpg',
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our team of experienced professionals is dedicated to your success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full  object-top"
                />
              </div>
              <h3 className="font-bold text-xl mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
