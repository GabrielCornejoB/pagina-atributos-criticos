# PÁGINA ATRIBUTOS CRÍTICOS

La siguiente página es un CRUD para realizar el taller de Atríbutos Críticos en una organización, consta de 3 páginas principales las cuales son: 

* Objetivos
* Aspectos Problemáticos
* Datos

Los cuales se deben llenar en el orden anterior, para más información mirar la imagen de la metodología del taller que también se encuentra en la página.

---

## **Explicación de las clases**

El proyecto cuenta de una gran cantidad de archivos php, a continuación estarán explicados cada uno de estos:

[Página inicio](#indexphp)

[Página editar](#editarphp)

[Página metodología](#metodologiaphp)

[Página objetivos](#objetivosphp)

[Página aspectos problemáticos](#aspectosproblematicosphp)

[Página datos](#datosphp)

[Clase conexión](#phpconnectionphp)

[Clase login](#phploginphp)

[Clase funciones](#phpfuncionesphp)

[Clases agregar](#phpagregar)

[Clases editar](#phpeditar)

[Clases eliminar](#phpeliminar)

---

### **index.php**

Esta es la página inicial al abrir la página, contiene la interfaz de login de usuarios, para poder acceder a la página se debe iniciar sesión.

---

### **editar.php**

Esta página sola no contiene mucho, pero cuando se llama desde un form de una de las páginas principales, genera un formulario con los campos de la respectiva clase el cual llama el metodo de editar en la base de datos. Tambien contiene en la parte inferior el formulario para eliminar.

---

### **metodologia.php**

Esta página contiene la imagen proporcionada con la metodología del taller de atríbutos criticos.

---

### **objetivos.php**

Esta es una de las páginas principales, en esta se puede visualizar los Objetivos creados por usuario, y al final de la página hay un formulario para crear nuevos Objetivos.

---

### **aspectosProblematicos.php**

Esta es otra de las páginas principales, en esta se pueden ver los Aspectos Problemátivos que hay creados por cada objetivo, al final de la página hay un formulario para crear nuevos Aspectos Problemáticos.

---

### **datos.php**

Esta es la ultima de las páginas principales, en esta se pueden ver los Datos involucrados por cada aspecto problemáticco, al final de la página hay un formulario para crear nuevos Datos.

---

### **php/connection.php**

Esta clase conecta con la base de datos justo antes de hacer una operación en la misma. Es llamada por la mayoría de las clases del proyecto.

---

### **php/login.php**

En esta clase se encuentra toda la lógica del Login para que se valide el ingreso de usuarios.

---

### **php/funciones.php**

En esta clase se encuentran funciones varias, principalmente para hacer operaciones SELECT en la base de datos y para generar el combobox o el mismo header que hay en cada página.

---

### **php/agregar...**

Son una serie de clases llamadas por los formularios crear, realizan la operación INSERT en la base de datos.

---

### **php/editar...**

Son una serie de clases llamadas por los formularios editar, realizan la operación UPDATE en la base de datos.

---

### **php/eliminar...**

Son una serie de clases llamadas por los formularios eliminar, realizan la operación DELETE en la base de datos.