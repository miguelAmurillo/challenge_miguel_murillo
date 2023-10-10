Feature: Infinity Growth Challenge

  @login
  Scenario: Login exitoso
    Given el usario esta en la pagina de inicio de sesión
    When intenta logearse con usuario y contraseña correctos
    Then la pantalla de home debe de ser mostrada
  @login
  Scenario: Login fallido
    Given el usario esta en la pagina de inicio de sesión
    When intenta logearse con usuario y contraseña incorrectos
    Then un mensaje de error debe de ser mostrado
  @carrito
  Scenario: Agregar item al carrito
    Given el usuario se encuentra en la pagina de home
    When agrega un item al carrito
    Then el item debe de aparecer en la sección del carrito
  @carrito
  Scenario: Agregar item al carrito (fallado intencinonalmente)
    Given el usuario se encuentra en la pagina de home
    When agrega un item al carrito
    Then el item no debe de aparecer en la sección del carrito
  @amazon_service
  Scenario: Get Departments Service
    When el usuario consulta el servicio de departamentos
    Then el servicio debe de responder con la lista de departamentos

  