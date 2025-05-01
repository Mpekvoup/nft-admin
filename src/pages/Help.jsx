function Help () {
    return (
        <section className="block">
            <div className="container">
                <h1 className="title">Помощь</h1>
                <div className="help-content">
                    <h2>Часто задаваемые вопросы</h2>
                    <ul>
                        <li><strong>Как добавить новый товар?</strong> — Перейдите в раздел "Товары" и нажмите "Добавить".</li>
                        <li><strong>Как посмотреть детали заказа?</strong> — Откройте раздел "Заказы" и выберите нужный заказ.</li>
                        <li><strong>Как связаться с поддержкой?</strong> — Напишите на <a href="mailto:beknurtaiten@gmail.com">beknurtaiten@gmail.com</a>.</li>
                    </ul>
                    <h2>Контакты</h2>
                    <p>Email: <a href="mailto:beknurtaiten@gmail.com">beknurtaiten@gmail.com</a></p>
                    <p>Телефон: +7 (705) 224-36-05</p>
                    <h2>Часы работы</h2>
                    <p>Пн-Пт: 9:00 - 18:00</p>
                    <p>Сб-Вс: Выходной</p>
                </div>
            </div>
        </section>
    );
}

export default Help;