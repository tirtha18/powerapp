import React from 'react';

const Contacts = () => {
  const prof = [
    {
      id: 1,
      name: 'Amitava Datta / Ph.D.',
      tel: '033-23355813 / amitava.datta@jadavpuruniversity.in | amdatta_ju@yahoo.com',
      spec: 'Thermal Engineering, Combustion, Energy'
    },
    {
      id: 2,
      name: 'Amitava Gupta / Ph.D.',
      tel: '23406163 / amitava.gupta@jadavpuruniversity.in',
      spec: 'Distributed Real-time Systems, Power Plant Simulation & Control, Control & Instrumentation of Nuclear Systems'
    },
    {
      id: 3,
      name: 'Apurba Kumar Santra / Ph.D.',
      tel: '033 23355813 / apurba.santra@jadavpuruniversity.in | aksantra@gmail.com',
      spec: 'Thermal & Fluid Science'
    },
    {
      id: 4,
      name: 'KAMAL KRISHNA MANDAL / Ph.D.',
      tel: '23355813 / kamal.mandal@jadavpuruniversity.in | kkm567@yahoo.co.in',
      spec: 'Power Systems Optimization, Soft Computing Techniques, Power Economics, Power Electronics'
    },
    {
      id: 5,
      name: 'Mousumi Basu / Ph.D.',
      tel: '9674067293 / mousumibasu@yahoo.com | mousumi.basu@jadavpuruniversity.in',
      spec: 'Power system, Soft Computing Technique'
    },
    {
      id: 6,
      name: 'Niladri Chakraborty / Ph.D.',
      tel: 'niladri.chakraborty@jadavpuruniversity.in',
      spec: 'Electrical M/cs, Pollution, Appl. Super conductivity',
    },
    {
      id: 7,
      name: 'Prithwiraj Purkait / Ph.D.',
      tel: 'prithwirajp.pe@jadavpuruniversity.in',
      spec: 'Fault Diagnosis and Condition Monitoring of Electrical Equipments, Application of Signal and Data Processing tools in High Voltage Engineering',
    }
  ];

  const assoprof = [
    {
      id: 1,
      name: 'BHIMSEN TUDU / Ph.D.',
      tel: '8240977076 / bhimsen.tudu@jadavpuruniversity.in | bhimsen_ju@yahoo.co.in',
      spec: 'Optimization, Economics of Hybrid non-conventional energy system'
    },
    {
      id: 2,
      name: 'GARGI KONAR (NAG) / M.E.E.',
      tel: '919830250659 / gargi.konar@jadavpuruniversity.in',
      spec: 'Electrical Machines, Microprocessor Based Protection of Power Apparatus'
    }
  ];

  const assisprof = [
    {
      id: 1,
      name: 'DEBASHIS PALIT / M.E.',
      tel: '9432514996 / palit2007@gmail.com | debashis.palit@jadavpuruniversity.in',
      spec: 'Electrical Machine, Measurement & Power System.'
    },
    {
      id: 2,
      name: 'Nirmalendu Biswas / Ph.D.',
      tel: '033 23355813 / nbiswas.pe@jadavpuruniversity.in | biswas.nirmalendu@gmail.com',
      spec: 'Thermal and Fluid Science'
    },
    {
      id: 3,
      name: 'Subrata Mondal / Ph.D.',
      tel: '+91 7685855145 / sub.mondal@gmail.com | subrata.mondal@jadavpuruniversity.in',
      spec: 'Manufacturing Science'
    }
  ];

  return (
    <div className="h-full w-full bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="flex px-10 py-28 h-full "></div>
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Faculty Summary - Full Time</h1>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Professors</h2>
          <table className="min-w-full bg-gray-800 border border-gray-700">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name / Qualification</th>
                <th className="py-2 px-4 border-b">Telephone No. / Email ID</th>
                <th className="py-2 px-4 border-b">Specialization</th>
              </tr>
            </thead>
            <tbody>
              {prof.map(({ id, name, tel, spec }) => (
                <tr key={id}>
                  <td className="py-2 px-4 border-b">{name}</td>
                  <td className="py-2 px-4 border-b">{tel}</td>
                  <td className="py-2 px-4 border-b">{spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Associate Professors</h2>
          <table className="min-w-full bg-gray-800 border border-gray-700">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name / Qualification</th>
                <th className="py-2 px-4 border-b">Telephone No. / Email ID</th>
                <th className="py-2 px-4 border-b">Specialization</th>
              </tr>
            </thead>
            <tbody>
              {assoprof.map(({ id, name, tel, spec }) => (
                <tr key={id}>
                  <td className="py-2 px-4 border-b">{name}</td>
                  <td className="py-2 px-4 border-b">{tel}</td>
                  <td className="py-2 px-4 border-b">{spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Assistant Professors</h2>
          <table className="min-w-full bg-gray-800 border border-gray-700">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name / Qualification</th>
                <th className="py-2 px-4 border-b">Telephone No. / Email ID</th>
                <th className="py-2 px-4 border-b">Specialization</th>
              </tr>
            </thead>
            <tbody>
              {assisprof.map(({ id, name, tel, spec }) => (
                <tr key={id}>
                  <td className="py-2 px-4 border-b">{name}</td>
                  <td className="py-2 px-4 border-b">{tel}</td>
                  <td className="py-2 px-4 border-b">{spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
