export type Dictionary = {
    resume_access_type: [
        {
            id: 'no_one'
            name: 'Не видно никому'
        },
        {
            id: 'whitelist'
            name: 'Видно выбранным работодателям'
        },
        {
            id: 'blacklist'
            name: 'Скрыто от выбранных работодателей'
        },
        {
            id: 'clients'
            name: 'Видно всем работодателям, зарегистрированным на hh.ru'
        },
        {
            id: 'everyone'
            name: 'видно всему интернету'
        },
        {
            id: 'direct'
            name: 'доступно только по прямой ссылке'
        },
    ]
    vacancy_search_order: [
        {
            id: 'publication_time'
            name: 'по дате'
        },
        {
            id: 'salary_desc'
            name: 'по убыванию дохода'
        },
        {
            id: 'salary_asc'
            name: 'по возрастанию дохода'
        },
        {
            id: 'relevance'
            name: 'по соответствию'
        },
        {
            id: 'distance'
            name: 'по удалённости'
        },
    ]
    vacancy_search_fields: [
        {
            id: 'name'
            name: 'в названии вакансии'
        },
        {
            id: 'company_name'
            name: 'в названии компании'
        },
        {
            id: 'description'
            name: 'в описании вакансии'
        },
    ]
    gender: [
        {
            id: 'male'
            name: 'Мужской'
        },
        {
            id: 'female'
            name: 'Женский'
        },
    ]
    preferred_contact_type: [
        {
            id: 'home'
            name: 'Домашний телефон'
        },
        {
            id: 'work'
            name: 'Рабочий телефон'
        },
        {
            id: 'cell'
            name: 'Мобильный телефон'
        },
        {
            id: 'email'
            name: 'Эл. почта'
        },
    ]
    travel_time: [
        {
            id: 'any'
            name: 'Не имеет значения'
        },
        {
            id: 'less_than_hour'
            name: 'Не более часа'
        },
        {
            id: 'from_hour_to_one_and_half'
            name: 'Не более полутора часов'
        },
    ]
    relocation_type: [
        {
            id: 'no_relocation'
            name: 'не могу переехать'
        },
        {
            id: 'relocation_possible'
            name: 'могу переехать'
        },
        {
            id: 'relocation_desirable'
            name: 'хочу переехать'
        },
    ]
    business_trip_readiness: [
        {
            id: 'ready'
            name: 'Могу приезжать в командировки'
        },
        {
            id: 'sometimes'
            name: 'Могу иногда приезжать в командировки'
        },
        {
            id: 'never'
            name: 'Не могу приезжать в командировки'
        },
    ]
    resume_contacts_site_type: [
        {
            id: 'personal'
            name: 'Другой сайт'
        },
        {
            id: 'moi_krug'
            name: 'Мой круг'
        },
        {
            id: 'livejournal'
            name: 'LiveJournal'
        },
        {
            id: 'linkedin'
            name: 'LinkedIn'
        },
        {
            id: 'freelance'
            name: 'Free-lance'
        },
        {
            id: 'skype'
            name: 'Skype'
        },
    ]
    employer_type: [
        {
            id: 'company'
            name: 'Организация'
        },
        {
            id: 'agency'
            name: 'Кадровое агентство'
        },
        {
            id: 'project_director'
            name: 'Проект'
        },
        {
            id: 'private_recruiter'
            name: 'Частный рекрутер'
        },
        {
            id: 'private_individual'
            name: 'Частное лицо'
        },
        {
            id: 'self_employed'
            name: 'Самозанятый'
        },
    ]
    employer_relation: [
        {
            id: 'blacklisted'
            name: 'Скрыт из поиска вакансий'
        },
    ]
    negotiations_state: [
        {
            id: 'response'
            name: 'Отклик'
        },
        {
            id: 'invitation'
            name: 'Приглашение'
        },
        {
            id: 'discard'
            name: 'Отказ'
        },
        {
            id: 'hidden'
            name: 'Скрытый'
        },
        {
            id: 'interview'
            name: 'Собеседование'
        },
        {
            id: 'hired'
            name: 'Выход на работу'
        },
    ]
    applicant_negotiation_status: [
        {
            id: 'all'
            name: 'Все'
        },
        {
            id: 'active'
            name: 'Активные'
        },
        {
            id: 'invitations'
            name: 'Активные приглашения'
        },
        {
            id: 'response'
            name: 'Активные отклики'
        },
        {
            id: 'discard'
            name: 'Отказ'
        },
        {
            id: 'archived'
            name: 'Архивированные'
        },
        {
            id: 'non_archived'
            name: 'Все, кроме архивированных'
        },
        {
            id: 'deleted'
            name: 'Скрытые'
        },
        {
            id: 'interview'
            name: 'Собеседование'
        },
        {
            id: 'hired'
            name: 'Выход на работу'
        },
    ]
    negotiations_participant_type: [
        {
            id: 'applicant'
            name: 'Соискатель'
        },
        {
            id: 'employer'
            name: 'Работодатель'
        },
    ]
    negotiations_order: [
        {
            id: 'updated_at'
            name: 'по дате обновления'
        },
        {
            id: 'created_at'
            name: 'по дате добавления'
        },
    ]
    resume_moderation_note: [
        {
            id: 'bad'
            name: 'Резюме составлено небрежно.'
        },
        {
            id: 'block_full_name'
            name: 'В резюме отсутствует полное имя кандидата.'
        },
        {
            id: 'bad_description'
            name: 'Укажите желаемую позицию, чтобы повысить свои шансы найти работу.'
        },
        {
            id: 'block_no_education_place_or_date'
            name: 'Отсутствуют данные об учебном заведении и дате его окончания.'
        },
        {
            id: 'bad_education'
            name: 'Плохо описано образование.'
        },
        {
            id: 'bad_education_student'
            name: 'Укажите полное название учебного заведения, факультет и планируемый год окончания.'
        },
        {
            id: 'block_no_function'
            name: 'Опишите подробнее свои обязанности и функции.'
        },
        {
            id: 'block_work_place'
            name: 'Не указан опыт работы за последнее время'
        },
        {
            id: 'no_company_name'
            name: 'Укажите названия мест работы.'
        },
        {
            id: 'no_company_description'
            name: 'Укажите сферу деятельности компаний, в которых Вы работали.'
        },
        {
            id: 'no_position'
            name: 'Плохо описаны занимаемые должности.'
        },
        {
            id: 'no_date'
            name: 'Отсутствуют даты начала и окончания работы.'
        },
        {
            id: 'bad_function'
            name: 'Плохо описаны функции и обязанности.'
        },
        {
            id: 'not_enough_information'
            name: 'Укажите больше дополнительной информации: владение иностранными языками, знание компьютерных программ и др.'
        },
        {
            id: 'lot_information'
            name: 'Слишком много дополнительной информации.'
        },
        {
            id: 'no_recommendation'
            name: 'Вы не предоставили ни одну рекомендацию.'
        },
        {
            id: 'careless_additional_information'
            name: 'Обратите внимание на раздел «Ключевые навыки». Укажите в нём сведения, которые выгодно отличат Вас в качестве претендента на желаемую позицию. Проверьте орфографию и опечатки.'
        },
        {
            id: 'careless_photo'
            name: 'Рекомендуем Вам изменить фотографию для резюме. Лучше размещать фотографии, где Вы изображены в деловом или повседневном костюме.'
        },
        {
            id: 'careless_key_skill_information'
            name: 'Отредактируйте раздел «Ключевые навыки» Вашего резюме, поскольку указанная информация не вполне соответствует формату и/или содержит опечатки.'
        },
        {
            id: 'incorrect_phone_number'
            name: 'В резюме указан несуществующий номер телефона. Если номер корректен, свяжитесь со службой поддержки'
        },
        {
            id: 'block_obscenity'
            name: 'Мат в резюме'
        },
        {
            id: 'block_obscenity_name'
            name: 'Мат в ФИО'
        },
        {
            id: 'block_obscenity_title'
            name: 'Мат в названии должности'
        },
        {
            id: 'block_obscenity_experience'
            name: 'Мат в разделе "Опыт работы"'
        },
        {
            id: 'block_obscenity_skills'
            name: 'Мат в поле "О себе"'
        },
        {
            id: 'block_obscenity_key_skills'
            name: 'Мат в ключевых навыках'
        },
        {
            id: 'block_obscenity_education'
            name: 'Мат в разделе "Образование"'
        },
        {
            id: 'block_obscenity_additional_education'
            name: 'Мат в разделе "Повышение квалификации и курсы"'
        },
        {
            id: 'block_obscenity_attestation_education'
            name: 'Мат в разделе "Тесты и экзамены"'
        },
        {
            id: 'block_obscenity_elementary_education'
            name: 'Мат в разделе "Начальное образование"'
        },
        {
            id: 'block_obscenity_recommendation'
            name: 'Мат в разделе "Рекомендации"'
        },
        {
            id: 'block_experience_in_one_place'
            name: 'Укажите опыт отдельно для каждой компании'
        },
        {
            id: 'experience_caps'
            name: 'При описании опыта работы проследите, что ЗАГЛАВНЫЕ БУКВЫ использованы только в начале предложений или для имен собственных'
        },
        {
            id: 'experience_multilang'
            name: 'Опыт работы должен быть описан на одном языке'
        },
        {
            id: 'experience_spelling'
            name: 'Исправьте орфографические ошибки в описании опыта работы'
        },
        {
            id: 'block_experience_in_additional_information'
            name: 'Опишите опыт работы в соответствующих полях'
        },
        {
            id: 'additional_information_caps'
            name: 'При заполнении поля "О себе" проследите, что ЗАГЛАВНЫЕ БУКВЫ использованы только в начале предложений или для имен собственных'
        },
        {
            id: 'additional_information_multilang'
            name: 'Поле "О себе" должно быть написано на одном языке'
        },
        {
            id: 'additional_information_spelling'
            name: 'Исправьте орфографические ошибки в поле "О себе"'
        },
    ]
    vacancy_relation: [
        {
            id: 'favorited'
            name: 'В избранном'
        },
        {
            id: 'got_response'
            name: 'Вы отправили резюме'
        },
        {
            id: 'got_invitation'
            name: 'Вас пригласили'
        },
        {
            id: 'got_rejection'
            name: 'Вам отказали'
        },
        {
            id: 'blacklisted'
            name: 'Скрыта из поиска'
        },
        {
            id: 'got_question'
            name: 'Вы задали вопрос по вакансии'
        },
    ]
    resume_status: [
        {
            id: 'not_published'
            name: 'не опубликовано'
        },
        {
            id: 'published'
            name: 'опубликовано'
        },
        {
            id: 'blocked'
            name: 'заблокирован'
        },
        {
            id: 'on_moderation'
            name: 'на модерации'
        },
    ]
    resume_search_logic: [
        {
            id: 'all'
            name: 'Все слова встречаются'
        },
        {
            id: 'any'
            name: 'Любое из слов встречается'
        },
        {
            id: 'phrase'
            name: 'Точная фраза встречается'
        },
        {
            id: 'except'
            name: 'Не встречаются'
        },
    ]
    resume_search_fields: [
        {
            id: 'everywhere'
            name: 'везде'
        },
        {
            id: 'title'
            name: 'в названии резюме'
        },
        {
            id: 'education'
            name: 'в образовании'
        },
        {
            id: 'skills'
            name: 'в ключевых навыках'
        },
        {
            id: 'experience'
            name: 'в опыте работы'
        },
        {
            id: 'experience_company'
            name: 'в компаниях и отраслях'
        },
        {
            id: 'experience_position'
            name: 'в должностях'
        },
        {
            id: 'experience_description'
            name: 'в обязанностях'
        },
    ]
    messaging_status: [
        {
            id: 'archived'
            name: 'Вакансия отправлена в архив'
        },
        {
            id: 'ok'
            name: 'Переписка доступна'
        },
        {
            id: 'disabled_by_employer'
            name: 'Работодатель отключил переписку'
        },
        {
            id: 'in_a_row_limit'
            name: 'Вы отправили 5 сообщений подряд. Дождитесь ответа, чтобы написать еще'
        },
        {
            id: 'overall_limit'
            name: 'Превышено число сообщений в переписке'
        },
        {
            id: 'no_invitation'
            name: 'Переписка доступна только после приглашения'
        },
        {
            id: 'resume_deleted'
            name: 'Резюме удалено'
        },
        {
            id: 'prohibited'
            name: 'Переписка недоступна'
        },
    ]
    employer_active_vacancies_order: [
        {
            id: 'name_asc'
            name: 'по заголовку'
        },
        {
            id: 'name_desc'
            name: 'по заголовку, в обратном порядке'
        },
        {
            id: 'expiration_date_asc'
            name: 'по дате'
        },
        {
            id: 'expiration_date_desc'
            name: 'по убыванию даты'
        },
        {
            id: 'unseen_responses_asc'
            name: 'по возрастанию количества непросмотренных откликов'
        },
        {
            id: 'unseen_responses_desc'
            name: 'по убыванию количества непросмотренных откликов'
        },
    ]
    employer_archived_vacancies_order: [
        {
            id: 'name_asc'
            name: 'по заголовку'
        },
        {
            id: 'name_desc'
            name: 'по заголовку, в обратном порядке'
        },
        {
            id: 'archive_time_asc'
            name: 'по дате архивации'
        },
        {
            id: 'archive_time_desc'
            name: 'по убыванию даты архивации'
        },
    ]
    employer_hidden_vacancies_order: [
        {
            id: 'name_asc'
            name: 'по заголовку'
        },
        {
            id: 'name_desc'
            name: 'по заголовку, в обратном порядке'
        },
        {
            id: 'archive_time_asc'
            name: 'по дате архивации'
        },
        {
            id: 'archive_time_desc'
            name: 'по убыванию даты архивации'
        },
    ]
    applicant_comments_order: [
        {
            id: 'creation_time_desc'
            name: 'по убыванию даты публикации'
        },
        {
            id: 'creation_time_asc'
            name: 'по дате публикации'
        },
    ]
    vacancy_not_prolonged_reason: [
        {
            id: 'vacancy_archived'
            name: 'Нельзя поднять архивную или заблокированную вакансию'
        },
        {
            id: 'vacancy_not_premoderated'
            name: 'Вакансия не прошла модерацию'
        },
        {
            id: 'standard_plus_cannot_be_closed'
            name: 'Вакансия "Стандарт Плюс" не может быть закрытой.'
        },
        {
            id: 'pfp_publication_is_updated_automatically'
            name: 'Вакансии с оплатой за контакты в откликах автоматически поднимаются раз в 3 дня'
        },
        {
            id: 'free_prolongation_not_available'
            name: 'Не получится поднять бесплатную вакансию'
        },
        {
            id: 'not_enough_quotas'
            name: 'Не хватает квот'
        },
        {
            id: 'not_enough_purchased_services'
            name: 'Вакансия не может быть обновлена. Недостаточно купленных услуг.'
        },
        {
            id: 'not_enough_division_services'
            name: 'Закончились услуги на отдел'
        },
        {
            id: 'vacancy_publication_disabled_in_area'
            name: 'Для размещения вакансий в странах Прибалтики обратитесь к персональному менеджеру'
        },
        {
            id: 'unknown'
            name: 'Не получится поднять вакансию'
        },
    ]
    resume_hidden_fields: [
        {
            id: 'names_and_photo'
            name: 'ФИО и фотографию'
        },
        {
            id: 'phones'
            name: 'Все указанные в резюме телефоны'
        },
        {
            id: 'email'
            name: 'Электронную почту'
        },
        {
            id: 'other_contacts'
            name: 'Другие контакты: соцсети, мессенджеры'
        },
        {
            id: 'experience'
            name: 'Все места работы'
        },
    ]
    phone_call_status: [
        {
            id: 'pick_successful'
            name: 'Установка соединения'
        },
        {
            id: 'calling'
            name: 'Звонок'
        },
        {
            id: 'did_not_connect'
            name: 'Абонент временно недоступен'
        },
        {
            id: 'call_in_progress'
            name: 'Телефонный разговор'
        },
        {
            id: 'call_error'
            name: 'Техническая ошибка'
        },
        {
            id: 'call_ended'
            name: 'Телефонный разговор завершен'
        },
    ]
    vacancy_label: [
        {
            id: 'with_address'
            name: 'Только с адресом'
        },
        {
            id: 'accept_handicapped'
            name: 'Только доступные для людей с инвалидностью'
        },
        {
            id: 'not_from_agency'
            name: 'Без вакансий агентств'
        },
        {
            id: 'accept_kids'
            name: 'Только доступные для соискателей от 14 лет'
        },
        {
            id: 'accredited_it'
            name: 'Только аккредитованные ИТ-компании'
        },
        {
            id: 'low_performance'
            name: 'Только вакансии, у которых меньше 10 откликов'
        },
        {
            id: 'internship'
            name: 'Стажировка'
        },
        {
            id: 'night_shifts'
            name: 'Вечерние или ночные смены'
        },
        {
            id: 'with_salary'
            name: 'Указан доход'
        },
    ]
    experience: [
        {
            id: 'noExperience'
            name: 'Нет опыта'
        },
        {
            id: 'between1And3'
            name: 'От 1 года до 3 лет'
        },
        {
            id: 'between3And6'
            name: 'От 3 до 6 лет'
        },
        {
            id: 'moreThan6'
            name: 'Более 6 лет'
        },
    ]
    employment: [
        {
            id: 'full'
            name: 'Полная занятость'
        },
        {
            id: 'part'
            name: 'Частичная занятость'
        },
        {
            id: 'project'
            name: 'Проектная работа'
        },
        {
            id: 'volunteer'
            name: 'Волонтерство'
        },
        {
            id: 'probation'
            name: 'Стажировка'
        },
    ]
    schedule: [
        {
            id: 'fullDay'
            name: 'Полный день'
            uid: 'full_day'
        },
        {
            id: 'shift'
            name: 'Сменный график'
            uid: 'shift'
        },
        {
            id: 'flexible'
            name: 'Гибкий график'
            uid: 'flexible'
        },
        {
            id: 'remote'
            name: 'Удаленная работа'
            uid: 'remote'
        },
        {
            id: 'flyInFlyOut'
            name: 'Вахтовый метод'
            uid: 'fly_in_fly_out'
        },
    ]
    education_level: [
        {
            id: 'secondary'
            name: 'Среднее'
        },
        {
            id: 'special_secondary'
            name: 'Среднее специальное'
        },
        {
            id: 'unfinished_higher'
            name: 'Неоконченное высшее'
        },
        {
            id: 'higher'
            name: 'Высшее'
        },
        {
            id: 'bachelor'
            name: 'Бакалавр'
        },
        {
            id: 'master'
            name: 'Магистр'
        },
        {
            id: 'candidate'
            name: 'Кандидат наук'
        },
        {
            id: 'doctor'
            name: 'Доктор наук'
        },
    ]
    currency: [
        {
            code: 'AZN'
            abbr: '₼'
            name: 'Манаты'
            default: false
            rate: 0.020234
            in_use: false
        },
        {
            code: 'BYR'
            abbr: 'Br'
            name: 'Белорусские рубли'
            default: false
            rate: 0.036185
            in_use: false
        },
        {
            code: 'EUR'
            abbr: '€'
            name: 'Евро'
            default: false
            rate: 0.010105
            in_use: true
        },
        {
            code: 'GEL'
            abbr: '₾'
            name: 'Грузинский лари'
            default: false
            rate: 0.032618
            in_use: false
        },
        {
            code: 'KGS'
            abbr: 'сом'
            name: 'Кыргызский сом'
            default: false
            rate: 1.04084
            in_use: false
        },
        {
            code: 'KZT'
            abbr: '₸'
            name: 'Тенге'
            default: false
            rate: 6.441307
            in_use: false
        },
        {
            code: 'RUR'
            abbr: '₽'
            name: 'Рубли'
            default: true
            rate: 1.0
            in_use: true
        },
        {
            code: 'UAH'
            abbr: '₴'
            name: 'Гривны'
            default: false
            rate: 0.492523
            in_use: false
        },
        {
            code: 'USD'
            abbr: '$'
            name: 'Доллары'
            default: false
            rate: 0.011902
            in_use: true
        },
        {
            code: 'UZS'
            abbr: "so'm"
            name: 'Узбекский сум'
            default: false
            rate: 146.989652
            in_use: false
        },
    ]
    vacancy_billing_type: [
        {
            id: 'free'
            name: 'Бесплатная'
        },
        {
            id: 'standard'
            name: 'Стандарт'
        },
        {
            id: 'standard_plus'
            name: 'Стандарт плюс'
        },
        {
            id: 'premium'
            name: 'Премиум'
        },
    ]
    applicant_comment_access_type: [
        {
            id: 'coworkers'
            name: 'Виден мне и моим коллегам'
        },
        {
            id: 'owner'
            name: 'Виден только мне'
        },
    ]
    vacancy_cluster: [
        {
            id: 'area'
            name: 'Регион'
        },
        {
            id: 'metro'
            name: 'Метро'
        },
        {
            id: 'salary'
            name: 'Уровень дохода'
        },
        {
            id: 'industry'
            name: 'Отрасль компании'
        },
        {
            id: 'sub_industry'
            name: 'Сфера компании'
        },
        {
            id: 'experience'
            name: 'Опыт работы'
        },
        {
            id: 'employment'
            name: 'Тип занятости'
        },
        {
            id: 'schedule'
            name: 'График работы'
        },
        {
            id: 'label'
            name: 'Исключение'
        },
        {
            id: 'professional_role'
            name: 'Профессиональная роль'
        },
        {
            id: 'district'
            name: 'Район'
        },
        {
            id: 'education'
            name: 'Образование'
        },
        {
            id: 'accept_temporary'
            name: 'оформление по ГПХ или по совместительству'
        },
        {
            id: 'employment_form'
            name: 'Тип занятости'
        },
        {
            id: 'work_schedule_by_days'
            name: 'График работы'
        },
        {
            id: 'working_hours'
            name: 'Рабочие часы в день'
        },
        {
            id: 'work_format'
            name: 'Формат работы'
        },
        {
            id: 'salary_frequency'
            name: 'Частота выплат'
        },
        {
            id: 'salary_per_mode'
            name: 'Уровень дохода'
        },
    ]
    driver_license_types: [
        {
            id: 'A'
        },
        {
            id: 'B'
        },
        {
            id: 'C'
        },
        {
            id: 'D'
        },
        {
            id: 'E'
        },
        {
            id: 'BE'
        },
        {
            id: 'CE'
        },
        {
            id: 'DE'
        },
        {
            id: 'TM'
        },
        {
            id: 'TB'
        },
    ]
    language_level: [
        {
            id: 'a1'
            name: 'A1 — Начальный'
        },
        {
            id: 'a2'
            name: 'A2 — Элементарный'
        },
        {
            id: 'b1'
            name: 'B1 — Средний'
        },
        {
            id: 'b2'
            name: 'B2 — Средне-продвинутый'
        },
        {
            id: 'c1'
            name: 'C1 — Продвинутый'
        },
        {
            id: 'c2'
            name: 'C2 — В совершенстве'
        },
        {
            id: 'l1'
            name: 'Родной'
        },
    ]
    working_days: [
        {
            id: 'only_saturday_and_sunday'
            name: 'По субботам и воскресеньям'
        },
    ]
    working_time_intervals: [
        {
            id: 'from_four_to_six_hours_in_a_day'
            name: 'Можно сменами по 4-6 часов в день'
        },
    ]
    working_time_modes: [
        {
            id: 'start_after_sixteen'
            name: 'С началом дня после 16:00'
        },
    ]
    vacancy_type: [
        {
            id: 'direct'
            name: 'Рекламная'
        },
        {
            id: 'anonymous'
            name: 'Анонимная'
        },
        {
            id: 'closed'
            name: 'Закрытая'
        },
        {
            id: 'open'
            name: 'Открытая'
        },
    ]
    job_search_statuses_applicant: [
        {
            id: 'active_search'
            name: 'Активно ищу работу'
        },
        {
            id: 'looking_for_offers'
            name: 'Рассматриваю предложения'
        },
        {
            id: 'not_looking_for_job'
            name: 'Не ищу работу'
        },
        {
            id: 'has_job_offer'
            name: 'Предложили работу, пока думаю'
        },
        {
            id: 'accepted_job_offer'
            name: 'Уже выхожу на новое место'
        },
    ]
    job_search_statuses_employer: [
        {
            id: 'active_search'
            name: 'Активно ищет работу'
        },
        {
            id: 'looking_for_offers'
            name: 'Рассматривает предложения'
        },
        {
            id: 'not_looking_for_job'
            name: 'Не ищет работу'
        },
        {
            id: 'has_job_offer'
            name: 'Предложили работу, решает'
        },
        {
            id: 'accepted_job_offer'
            name: 'Вышел на новое место'
        },
    ]
    employment_form: [
        {
            id: 'FULL'
            name: 'Полная'
        },
        {
            id: 'PART'
            name: 'Частичная'
        },
        {
            id: 'PROJECT'
            name: 'Проект или разовое задание'
        },
        {
            id: 'FLY_IN_FLY_OUT'
            name: 'Вахта'
        },
    ]
    work_format: [
        {
            id: 'ON_SITE'
            name: 'На месте работодателя'
        },
        {
            id: 'REMOTE'
            name: 'Удалённо'
        },
        {
            id: 'HYBRID'
            name: 'Гибрид'
        },
        {
            id: 'FIELD_WORK'
            name: 'Разъездной'
        },
    ]
    resume_employment_form: [
        {
            id: 'FULL'
            name: 'Постоянная работа'
        },
        {
            id: 'PART_TIME'
            name: 'Подработка'
        },
        {
            id: 'INTERNSHIP'
            name: 'Стажировка'
        },
        {
            id: 'VOLUNTEER'
            name: 'Волонтёрство'
        },
    ]
    resume_work_format: [
        {
            id: 'ON_SITE'
            name: 'На месте работодателя'
        },
        {
            id: 'REMOTE'
            name: 'Удалённо'
        },
        {
            id: 'HYBRID'
            name: 'Гибрид'
        },
        {
            id: 'FIELD_WORK'
            name: 'Разъездной'
        },
        {
            id: 'FLY_IN_FLY_OUT'
            name: 'Вахта'
        },
    ]
    working_hours: [
        {
            id: 'HOURS_2'
            name: '2 часа'
        },
        {
            id: 'HOURS_3'
            name: '3 часа'
        },
        {
            id: 'HOURS_4'
            name: '4 часа'
        },
        {
            id: 'HOURS_5'
            name: '5 часов'
        },
        {
            id: 'HOURS_6'
            name: '6 часов'
        },
        {
            id: 'HOURS_7'
            name: '7 часов'
        },
        {
            id: 'HOURS_8'
            name: '8 часов'
        },
        {
            id: 'HOURS_9'
            name: '9 часов'
        },
        {
            id: 'HOURS_10'
            name: '10 часов'
        },
        {
            id: 'HOURS_11'
            name: '11 часов'
        },
        {
            id: 'HOURS_12'
            name: '12 часов'
        },
        {
            id: 'HOURS_24'
            name: '24 часа'
        },
        {
            id: 'FLEXIBLE'
            name: 'По договорённости'
        },
        {
            id: 'OTHER'
            name: 'Другое'
        },
    ]
    fly_in_fly_out_duration: [
        {
            id: 'DAYS_15'
            name: '15'
        },
        {
            id: 'DAYS_20'
            name: '20'
        },
        {
            id: 'DAYS_30'
            name: '30'
        },
        {
            id: 'DAYS_40'
            name: '40'
        },
        {
            id: 'DAYS_45'
            name: '45'
        },
        {
            id: 'DAYS_60'
            name: '60'
        },
        {
            id: 'DAYS_90'
            name: '90'
        },
        {
            id: 'DAYS_120'
            name: '120'
        },
        {
            id: 'DAYS_180'
            name: '180'
        },
        {
            id: 'OTHER'
            name: 'Другое'
        },
    ]
    work_schedule_by_days: [
        {
            id: 'SIX_ON_ONE_OFF'
            name: '6/1'
        },
        {
            id: 'FIVE_ON_TWO_OFF'
            name: '5/2'
        },
        {
            id: 'FOUR_ON_FOUR_OFF'
            name: '4/4'
        },
        {
            id: 'FOUR_ON_THREE_OFF'
            name: '4/3'
        },
        {
            id: 'FOUR_ON_TWO_OFF'
            name: '4/2'
        },
        {
            id: 'THREE_ON_THREE_OFF'
            name: '3/3'
        },
        {
            id: 'THREE_ON_TWO_OFF'
            name: '3/2'
        },
        {
            id: 'TWO_ON_TWO_OFF'
            name: '2/2'
        },
        {
            id: 'TWO_ON_ONE_OFF'
            name: '2/1'
        },
        {
            id: 'ONE_ON_THREE_OFF'
            name: '1/3'
        },
        {
            id: 'ONE_ON_TWO_OFF'
            name: '1/2'
        },
        {
            id: 'WEEKEND'
            name: 'По выходным'
        },
        {
            id: 'FLEXIBLE'
            name: 'Свободный'
        },
        {
            id: 'OTHER'
            name: 'Другое'
        },
    ]
    salary_range_mode: [
        {
            id: 'MONTH'
            name: 'За месяц'
        },
        {
            id: 'SHIFT'
            name: 'За смену'
        },
        {
            id: 'HOUR'
            name: 'За час'
        },
        {
            id: 'FLY_IN_FLY_OUT'
            name: 'За вахту'
        },
        {
            id: 'SERVICE'
            name: 'За услугу'
        },
    ]
    salary_range_frequency: [
        {
            id: 'DAILY'
            name: 'Ежедневно'
        },
        {
            id: 'WEEKLY'
            name: 'Раз в неделю'
        },
        {
            id: 'TWICE_PER_MONTH'
            name: 'Два раза в месяц'
        },
        {
            id: 'MONTHLY'
            name: 'Раз в месяц'
        },
        {
            id: 'PER_PROJECT'
            name: 'За проект'
        },
    ]
    age_restriction: [
        {
            id: 'AGE_14_PLUS'
            name: 'От 14 лет'
        },
        {
            id: 'AGE_16_PLUS'
            name: 'От 16 лет'
        },
    ]
    resume_search_label: [
        {
            id: 'only_with_photo'
            name: 'Только с фотографией'
        },
        {
            id: 'only_with_salary'
            name: 'Не показывать резюме без зарплаты'
        },
        {
            id: 'only_with_age'
            name: 'Не показывать резюме без указания возраста'
        },
        {
            id: 'only_with_gender'
            name: 'Не показывать резюме без указания пола'
        },
        {
            id: 'only_with_vehicle'
            name: 'Есть личный автомобиль'
        },
        {
            id: 'exclude_viewed_by_user_id'
            name: 'Скрыть резюме, просмотренные мной'
        },
        {
            id: 'exclude_viewed_by_employer_id'
            name: 'Скрыть резюме, просмотренные всей компанией'
        },
        {
            id: 'only_in_responses'
            name: 'Показать только из откликов и приглашений'
        },
    ]
    resume_search_relocation: [
        {
            id: 'living_or_relocation'
            name: 'Живут в указанном регионе или готовы переехать в него'
        },
        {
            id: 'living'
            name: 'Живут в указанном регионе'
        },
        {
            id: 'living_but_relocation'
            name: 'Живут в указанном регионе и готовы к переезду куда-либо'
        },
        {
            id: 'relocation'
            name: 'Не живут в указанном регионе, но готовы переехать в него'
        },
    ]
    resume_search_order: [
        {
            id: 'publication_time'
            name: 'по дате изменения'
        },
        {
            id: 'salary_desc'
            name: 'по убыванию зарплат'
        },
        {
            id: 'salary_asc'
            name: 'по возрастанию зарплаты'
        },
        {
            id: 'relevance'
            name: 'по соответствию'
        },
    ]
    resume_search_experience_period: [
        {
            id: 'all_time'
            name: 'За всё время работы'
        },
        {
            id: 'last_year'
            name: 'За последний год'
        },
        {
            id: 'last_three_years'
            name: 'За последние 3 года'
        },
        {
            id: 'last_six_years'
            name: 'За последние 6 лет'
        },
    ]
}

export type Locales = [
    {
        id: 'EN'
        name: 'English'
        current: false
    },
    {
        id: 'KG'
        name: 'Кыргызча'
        current: false
    },
    {
        id: 'KZ'
        name: 'Қазақша'
        current: false
    },
    {
        id: 'RU'
        name: 'Русский'
        current: true
    },
    {
        id: 'UZ'
        name: "О'zbek"
        current: false
    },
]

export type Methods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export type ContentType =
    | 'application/x-www-form-urlencoded'
    | 'text/plain'
    | 'multipart/form-data'
    | 'application/json'

export type NegotiationSource =
    | 'NEGOTIATION'
    | 'PHONE_CALL'
    | 'CHAT'
    | 'VR'
    | 'AUTO_INVITE'
    | 'APPLICANT_QUESTIONS'
    | 'AUTO_RESPONSE'
    | 'AUTO_RESPONSE_HH_PRO'
    | 'CLICKME_CPA'
    | 'REGISTRATION'

export type ParticipantType = 'applicant' | 'employer'

export type PropertyType =
    | 'HH_ANONYMOUS'
    | 'HH_STANDARD_PLUS'
    | 'HH_STANDARD'
    | 'HH_FREE'
    | 'HH_PREMIUM'
    | 'HH_ADVERTISING'
    | 'HH_PAY_FOR_PERFORMANCE'
    | 'ZP_CROSSPOSTING'
