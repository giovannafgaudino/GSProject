import infos from '../../../infos.json'
function ContatoContent() {
    return (
        <>
            <main className='contato'>
                <section >
                    <div className='contato-content'>
                        {infos.sobre.map((i, index) => (
                            <div key={index} className='contato-item'>
                                <div>
                                    <h3>{i.title} </h3>

                                    <p className='text-muted'>{i.description}</p>
                                </div>
                                {i.content.map((item, indexItem) => (
                                    <div key={indexItem}>
                                        <p className='topic'>{item.topic}</p>
                                        <p>{item.text}</p>
                                    </div>
                                ))}
                            </div>


                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}
export default ContatoContent