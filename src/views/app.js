const App = {
    view: () => {
        return [
            m("section.loader-page[id='loaderPage']",
                m("div.spinner_flash")
            ),
            m("[id='wrapper']",
                m("[id='content']", [
                    m("header.default.heade-sticky", [
                        m("div.un-title-page.go-back", [
                            m("a.icon[href='/']",
                                m("img[src='images/favicon.ico'][alt='HM'][width='50%']")

                            ),
                            m("h1")
                        ]),
                        m("div.un-block-right",
                            m("a.btn.nav-link.text-primary.size-14.weight-500.pe-0[href='page-create-account.html']",
                                "Hospital Metropolitano"
                            )
                        )
                    ]),
                    m("div.space-sticky"),
                    m("section.account-section.padding-20", [
                        m("div.connect-with-apps.margin-b-50", [
                            m("img[src='images/logo.metrovirtual.png'][alt='Metrovirtual']")

                        ]),

                        m("div.display-title", [

                            m("h1",
                                "¡Bienvenido!"
                            ),
                            m("p",
                                "Por favor inicia sesión para continuar. "
                            ),

                        ]),
                        m("div.dividar_or",
                            m("span",
                                "v4.0.0"
                            )
                        ),
                        m("div.content__form.margin-t-24",
                            m("form", [
                                m("div.form-group.icon-left", [
                                    m("label",
                                        "Usuario o correo electrónico:"
                                    ),
                                    m("div.input_group", [
                                        m("input.form-control[type='email'][placeholder='mperez o mperez@hmetro.med.ec'][required]"),
                                        m("div.icon",
                                            m("i.ri-user-line")
                                        )
                                    ])
                                ]),
                                m("div.form-group.icon-left", [
                                    m("label",
                                        "Contraseña:"
                                    ),
                                    m("div.input_group", [
                                        m("input.form-control[type='password'][placeholder='Contraseña'][required]"),
                                        m("div.icon",
                                            m("i.ri-lock-password-line")
                                        )
                                    ]),
                                    m("a.text-primary.size-13.margin-t-14.d-block.text-decoration-none.weight-500[href='page-reset-password.html']",
                                        "¿Olvido su contraseña?"
                                    )
                                ]),
                                m("section.copyright-mark",
                                    m("div.content", [
                                        m("img.logo-gray[src='images/logo-hm.svg'][alt='HM']"),

                                    ]),
                                    m("div.content", [
                                        m("img.logo-gray[src='images/jci.png'][alt='HM']"),
                                        m("img.logo-gray[src='images/14_america_1.png'][alt='HM']"),
                                        m("img.logo-gray[src='images/planetree.png'][alt='HM']"),




                                        m("p",
                                            "©2022 - Todos los derechos reservados."
                                        )
                                    ])
                                ),

                            ])
                        )
                    ]),
                    m("footer.footer-account",
                        m("div.env-pb", [

                            m("div.display-actions.text-center",
                                m("a.btn.btn-sm-arrow.bg-primary[href='homepage.html']", [
                                    m("p",
                                        "Entrar"
                                    ),
                                    m("div.ico",
                                        m("i.ri-arrow-drop-right-line")
                                    )
                                ])
                            ),

                            m("div.dividar"),
                            m("div.support",
                                m("p", "¿Necesita ayuda? "),
                                m("p", [
                                    m("a[href='page-help.html']",
                                        "Contacta con nuestro equipo de soporte"
                                    )
                                ])
                            )

                        ])
                    )
                ])
            ),
            m("div.d-flex.justify-content-center",
                m(".toast.status-connection[role='alert'][aria-live='assertive'][aria-atomic='true']")
            )
        ];
    },
};

export default App;