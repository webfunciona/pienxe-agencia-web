# PLAYBOOK.md — El manual de operaciones de Pienxe

> **"Plano de obra, no humo."**
> Este documento consolida el funcionamiento interno, las tecnologías y las políticas que rigen la entrega de valor en Pienxe. Es la guía definitiva para mantener la coherencia entre lo que pensamos y lo que construimos.

---

## 1. La Filosofía: Pensar antes de Construir

En Pienxe, rechazamos la inmediatez sin propósito. Nuestra metodología se basa en la **Cimentación Técnica**:

1.  **Cerebro Único**: No entregamos piezas sueltas. Entregamos sistemas donde la web, la IA y el CRM hablan el mismo idioma.
2.  **Métrica del Lunes**: El éxito no es una demo bonita; es que tu operación mejore el lunes por la mañana.
3.  **Boutique de Alta Precisión**: Preferimos pocas cuentas con profundidad total que volumen con ejecución superficial.

---

## 2. Estrategias de Ejecución

### 2.1 El Plano de Obra (SDD)
No se escribe una sola línea de código sin una **Especificación (Spec)** previa.
*   **Problema**: Evitamos el "desarrollo por aproximación".
*   **Solución**: Definimos objetivos, métricas y casos de borde antes de abrir el editor.
*   **Resultado**: Código limpio, funcional y alineado con el negocio desde el primer commit.

### 2.2 Orquestación de IA
La IA no es magia, es un operario avanzado.
*   **Agentes, no Chatbots**: Construimos agentes autónomos que ejecutan tareas (ventas, soporte, triaje) integrados en tu infraestructura real.
*   **RAG (Retrieval-Augmented Generation)**: Tu IA solo habla con tus datos privados y seguros.

---

## 3. Stack Tecnológico (La Armadura)

Elegimos herramientas que priorizan la velocidad, la escalabilidad y la soberanía del dato.

| Capa | Tecnología | Razón |
| :--- | :--- | :--- |
| **Framework** | **Astro 4.x** | El sitio más rápido del mundo. Zero-JS por defecto. |
| **Estilos** | **Tailwind CSS** | Sistema de diseño atómico y tokens consistentes. |
| **Lógica** | **TypeScript** | Seguridad tipográfica total. Cero errores en runtime. |
| **Infraestructura** | **Docker + Nginx** | Portabilidad total. Tu sitio corre igual en cualquier VPS. |
| **Automatización** | **n8n / Agents** | Orquestación visual y programática de flujos complejos. |

---

## 4. Políticas de Calidad (No Negociables)

### 4.1 Performance Extrema
*   **Lighthouse 100/100/100/100**: Es nuestro piso, no nuestro techo.
*   **LCP < 1.2s**: La web debe sentirse instantánea.
*   **Zero Bloat**: No cargamos librerías "por si acaso". Cada byte debe justificarse.

### 4.2 Localización Nativa (i18n)
*   **Día 1**: Todo proyecto nace preparado para múltiples idiomas (ES, EN, DE).
*   **Rutas Robustas**: Uso obligatorio de `translatePath` para evitar links rotos entre idiomas.

### 4.3 SEO & Accesibilidad
*   **Semántica Pura**: El HTML debe ser legible tanto para un humano como para un bot de búsqueda.
*   **Contraste AAA**: El diseño premium debe ser inclusivo y legible en cualquier dispositivo.

---

## 5. Voz y Tonada

**"Corazón cubano con disciplina alemana."**

*   **Directos**: Decimos lo que funciona y lo que no, sin rodeos corporativos.
*   **Opinados**: Tenemos una postura técnica clara. Si algo es una mala idea, te lo diremos.
*   **Cálidos pero Firmes**: La relación es de partners técnicos, no de proveedores de tickets.

---

## 6. Gobernanza de Datos

*   **Soberanía**: El cliente es dueño de su código y sus datos. Evitamos el "lock-in" de plataformas propietarias siempre que sea posible.
*   **Seguridad**: Implementamos políticas de "Security by Design" desde la fase de cimentación.

---

_Este documento es un organismo vivo. Se actualiza con cada aprendizaje, cada error corregido y cada nueva frontera tecnológica que conquistamos._
