function Help () {
    return (
        <section className="block">
            <div className="container">
                <h1 className="title">Помощь</h1>
                <div className="help-content">
                    <h2 className="helptxt">Часто задаваемые вопросы</h2>
                    <ul className="helptxt">
                        <li className="helptxt"><strong>Как добавить новый товар?</strong> — Перейдите в раздел "Товары" и нажмите "Добавить".</li>
                        <li className="helptxt"><strong>Как посмотреть детали заказа?</strong> — Откройте раздел "Заказы" и выберите нужный заказ.</li>
                        <li className="helptxt"><strong>Как связаться с поддержкой?</strong> — Напишите на <a href="mailto:beknurtaiten@gmail.com">beknurtaiten@gmail.com</a>.</li>
                    </ul>
                    <h2 className="helptxt">Контакты</h2>
                    <p className="helptxt">Email: <a href="mailto:beknurtaiten@gmail.com">beknurtaiten@gmail.com</a></p>
                    <p className="helptxt">Телефон: +7 (705) 224-36-05</p>
                    <h2 className="helptxt">Часы работы</h2>
                    <p className="helptxt">Пн-Пт: 9:00 - 18:00</p>
                    <p className="helptxt">Сб-Вс: Выходной</p>
                </div>
            </div>
        </section>
    );
}

export default Help;