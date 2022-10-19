import data from 'assets/transactions.json';

export const List = () => {
  return (
    <>
      {data.map(data => (
        // <tbody>
        <tr key={data.id}>
          <td>{data.type}</td>
          <td>{data.amount}</td>
          <td>{data.currency}</td>
        </tr>
        // </tbody>
      ))}
    </>
  );
};

// "id": "1e0700a2-5183-4291-85cc-2065a036a683",
// "type": "invoice",
// "amount": "964.82",
// "currency": "LRD"
