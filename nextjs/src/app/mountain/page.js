async function getData(){
    const res = await fetch(
        "https://snowtooth-api-rest.fly.dev"
    );
    return res.json();
}

export default async function Page(){
    const data = await getData();
    return (
        <main>
            <h1> My Bio </h1>
            <table>
                <thread>
                    <tr>
                        <th> Lift Name </th>
                        <th> Current Status </th>
                    </tr>
                </thread>
                <tbody>
                    {data.map((lift) => (
                        <tr key={lift.id}>
                            <td>{lift.name}</td>
                            <td>{lift.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
}