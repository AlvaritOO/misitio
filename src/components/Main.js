import PropTypes from 'prop-types'
import React from 'react'
import logo2LuisaMedina from '../images/logo2LuisaMedina.png'
import justicia from '../images/Justicia.jpg'
import abogadosFamilia from '../images/abogados-familia-1.png'
import asesoria1 from '../images/logo1.png'
import asesoria2 from '../images/logo2.png'
import asesoria3 from '../images/logo3.png'
import asesoria4 from '../images/logo1LuisaMedina.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Aréa de interes</h2>
          <span className="image main">
            <img src={justicia} alt="" />
          </span>
          <p>
          Asesorar no es sólo emitir una opinión jurídica, implica analizar cada situación en particular a fin de llegar a la mejor solución en cada caso; es por eso que con nosotros, serás parte de tu causa, entenderás y comprenderás tu panorama. <a href="#work">QUIERO SER PARTE</a>.
          </p><p>"Nuestro compromiso es brindarte una asesoría integral, personalizada, humana y de calidad, gestionando tus derechos con celeridad, eficiencia y eficacia.</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Nuestros Servicios</h2>
          <span className="image main">
            <img src={logo2LuisaMedina} alt="" />
          </span>
          <h3>RECHAZO DE LICENCIAS MÉDICAS</h3>
          <p>Asesoría y eventual tramitación administrativa por rechazo de licencias médicas. Tramitación judicial por rechazo de licencias médicas.</p>
          <h3>LIQUIDACIONES (Quiebras):</h3>
          <p>Asesoría y Patrocinio de causas de Liquidaciones de personas y empresas deudoras, de acuerdo al procedimiento de la Ley 20.720, con la finalidad de liquidar sus bienes y extinguir su deuda.</p>
          <h3>PENSIONES DE INVALIDEZ</h3>
          <p>Asesoría, representación y acompañamiento en la solicitud y tramitación de pensión de invalidez, por personal autorizado ante la Superintendencia de Pensiones. Eventual tramitación judicial del rechazo.</p>
          <span className="image main">
            <img src={abogadosFamilia} alt="" />
          </span>
          <h3>FAMILIA</h3>
          <p>Alimentos, Aumento, Rebaja y Cese de Alimentos, Cuidado Personal, Divorcios unilaterales, de común acuerdo, por culpa, Relación directa y regular (visitas) Declaración de bien familiar, Violencia intrafamiliar, Medidas de protección, Solicitud judicial de autorización para salir del país, cumplimiento de alimentos, Reclamación e impugnación de filiación.</p>
          <h3>CIVIL</h3>
          <p>Asistencia legal en actos expropiatorios, Procesos administrativos y judiciales de regularización de pequeña propiedad, Arriendos, Prescripción deudas de aseo (basura), Tercerías (embargos), Cambios de nombre, Redacción de contratos y escrituras públicas, Cumplimiento o resolución de contratos, Redacción de testamentos, Tramitación de posesiones efectivas intestadas, Juicios restitutorios como precarios, reivindicaciones, Cobros de pesos, Cobros de honorarios, Prescripciones de deuda, Indemnizaciones de perjuicios, Avenimientos y Transacciones extrajudiciales, Posesiones efectivas testadas, Rectificaciones de partida de nacimiento, Extravío de títulos, Cobros de factura, pagaré, cheque y otros títulos ejecutivos, Interdicción por demencia.</p>
          <h3>LABORAL</h3>
          <p>Despido injustificado , Tutela por vulneración de derechos, Desafueros maternales y sindicales, Cobro de prestaciones, Accidentes del Trabajo, Enfermedades Profesionales, Acoso laboral, Autodespido, Revisión documental para empleadores, Asesoría laboral para empleadores y sindicatos.</p>
          <h3>RECURSOS DE PROTECCIÓN</h3>
          <p>Recursos de protección por fraudes bancarios, alza del plan base,  alza del GES, por no cobertura de prestaciones de salud pactadas y demás garantías constitucionales.</p>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Asesorías y Convenios</h2>
        
          <p>
          Nuestro estudio jurídico presta el servicio de Asesorías legales a empresas. Actualmente asesoramos a:
          </p>
          <span className="image main">
            <img src={asesoria1} alt="" />
          </span>
          <p>
          Une Joyas
          </p>
          <span className="image main">
            <img src={asesoria2} alt="" />
          </span>
          <p>
          Radio Emilia
          </p>
          <span className="image main">
            <img src={asesoria3} alt="" />
          </span>
          <p>
          Fundacion Social somos CCHC
          </p>
         
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">INFORMACIÓN DE CONTACTO</h2>
              <p>Contacto + 56 9 7986 4599</p>  
              <p href="mail">contacto@estudiomedinayabogados.cl</p>
              <p>Calle Bueras 359 (Edificio Génesis), piso 8, oficina 812, Rancagua. </p> 
              <p>HORARIO DE ATENCIÓN: Lunes a viernes de 09:30 a 18:30 horas. Atención presencial, previa cita.</p>        
              <br />
          <ul className="icons">
            <li>
              <a
                href="https://www.instagram.com/medinayabogados/?hl=es-la"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/MedinayAbogados-110855787388248" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
