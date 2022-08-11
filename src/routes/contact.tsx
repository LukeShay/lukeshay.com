import { component$ } from '@builder.io/qwik';

const ContactPage = component$(() => (
  <div>
    <iframe
      frameBorder="0"
      height="844"
      marginHeight={0}
      marginWidth={0}
      src="https://docs.google.com/forms/d/e/1FAIpQLSes6N8luRo0m_Si2I8VEBDQkK_NylMT09z1rv4ttEqK2t2JdA/viewform?embedded=true"
      title="contact-form"
      width="640"
    >
      {'Loading…'}
    </iframe>
  </div>
));

// ContactPage.title = 'Luke Shay | Contact';
// ContactPage.description = 'Contact Luke Shay.';

export default ContactPage;
