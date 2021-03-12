import { useState } from "react";
import Input from "./input";
import { useCommonTranslation } from "../tools/i18n";
import Link from "next/link";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function ContactForm() {
  const { t } = useCommonTranslation();
  const [token, setToken] = useState();
  const [state, setState] = useState('initial');
  const [error, setError] = useState();

  const sendEmail = async event => {
    event.preventDefault();

    setState('sending');

    const res = await fetch('/api/contact', {
      body: JSON.stringify({
        fromName: event.target.fromName.value,
        fromEmail: event.target.fromEmail.value,
        message: event.target.message.value,
        token: token,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const result = await res.json();
    if (result.success) {
      setState('success');
    } else {
      setState('error');
      setError(result.error);
    }
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey="6LdcxHsaAAAAACeqgJqn5vRil4eSGw_3SZbptzHi">
      <form onSubmit={sendEmail}>
        <Input
          name="fromName"
          type="text"
          label={ t('contact_form_name_label') }
          placeholder={ t('contact_form_name_placeholder') } />
        <Input
          name="fromEmail"
          type="email"
          label={ t('contact_form_email_label') }
          placeholder={ t('contact_form_email_placeholder') } />
        <Input
          name="message"
          type="textarea"
          label={ t('contact_form_message_label') }
          placeholder={ t('contact_form_message_placeholder') } />
        <div>
          {
            state === 'success' && (
              <>
                <div className="mt-10 px-12 py-2 ml-auto mr-auto text-green">
                  <img className="w-8 h-8 mr-2 inline-block" src="/images/icons/success.svg" alt="✓"/>
                  { t('contact_form_success') }
                </div>
                <Link href='/'>{ t('contact_form_home_link') }</Link>
              </>
            )
          }
          {
            state === 'error' && (
              <div className="mt-10 px-12 py-2 text-purple">
                <img className="w-8 h-8 mr-2 inline-block" src="/images/icons/error.svg" alt="✗" /> { t(error) }
              </div>
            )
          }
          {
            (state === 'initial' || state === 'error') && (
              <>
                <button type="submit"
                        className="mt-10 px-12 py-2 ml-auto mr-auto max-w-sm focus:outline-none">
                  <img className="w-8 h-8 mr-2 inline-block" src="/images/icons/send.svg" alt="→" />
                  { state === 'initial' ? t('contact_form_send_button') : t('contact_form_retry_button') }
                </button>
                <GoogleReCaptcha onVerify={token => { setToken(token); }} />
              </>
            )
          }
          {
            state === 'sending' && (
              <div className="mt-10 px-12 py-2 ml-auto mr-auto text-brown-dark">
                <img className="w-8 h-8 mr-2 inline-block" src="/images/icons/spinner.gif" alt="..." />
                {t('contact_form_sending')}
              </div>
            )
          }
        </div>
      </form>
    </GoogleReCaptchaProvider>
  )
}