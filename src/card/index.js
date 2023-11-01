

function Card({activateCard}) {
    return (
        <div>
            {activateCard}
        </div>
    );
}

function Index() {
    return (
        <Card activateCard={"aaaa"}>

        </Card>
    );
}

export default Index;