import { languages } from './components/languages.jsx'
import Button from './components/Button.jsx'
import Card from './components/Card.jsx'


export default function Main() {

    return (
        <section>
            <div className='container'>
                <ul className='list'>
                    {languages.map((language) => (
                        <li key={language.id}>
                            <Button title={language.title} />
                        </li>
                    ))}

                </ul>
            </div>
            <div className='container'>
                {languages.map((language) => (
                    <div key={language.id} className='cards'>
                        <Card title={language.title} description={language.description} />
                    </div>
                ))}
            </div>
        </section>
    )

}