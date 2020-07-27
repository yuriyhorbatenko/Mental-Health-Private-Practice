import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Links extends Component {
  render() {
    return (
      <>
        <Fade>
          <div id='LinksBody'>
            <Zoom cascade>
              <div id='Body-Text'>Helpful Links</div>
            </Zoom>
          </div>
          <div id='Divider'></div>
          <div className='Links-body'>
            <Zoom cascade>
              <div className='Links'>

                <h3 className='topic-links'>
                  <a
                    className='effect-underline'
                    href='https://suicidepreventionlifeline.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    National Suicide Prevention Lifeline:
                  </a>
                  <span className='topic-phone'>(800)-273-8255</span>
                </h3>

                <h3 className='topic-links'>
                  <a
                    className='effect-underline'
                    href='https://philadelphia.pa.networkofcare.org/mh/emergency-services.aspx'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Suicide and Crisis Intervention Hotline:
                  </a>
                  <span className='topic-phone'>(215)-686-4420</span>
                </h3>

                <h3 className='topic-links'>
                  <a
                    className='effect-underline'
                    href='https://www.nami.org/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    National Alliance on Mental Illness:
                  </a>
                  <span className='topic-phone'>(800)-950-6264</span>
                </h3>

                <h3 className='topic-links'>
                  <a
                    className='effect-underline'
                    href='https://dbhids.org'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Mental Health Delegates:
                  </a>
                  <span className='topic-phone'>(215)-685-6440</span>
                </h3>

                <h3 className='topic-links'>
                  <a
                    className='effect-underline'
                    href='https://www.philachildrenscrc.com/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Philadelphia Children's Crisis Response Center:
                  </a>
                  <span className='topic-phone'>(844)-793-9429</span>
                </h3>

                <h3 className='topic-links'>
                  <a
                    className='effect-underline'
                    href='https://www.chop.edu/centers-programs/emergency-department'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Children's Hospital of Philadelphia Emergency:
                  </a>
                  <span className='topic-phone'>(215)-590-1000</span>
                </h3>

                <h3 className='topic-links'>
                  <a
                    className='effect-underline'
                    href='https://www.med.upenn.edu/hallmercer/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Hall-Mercer Crisis Center:
                  </a>
                  <span className='topic-phone'>(215)-829-7271</span>
                </h3>
              </div>
            </Zoom>
          </div>
        </Fade>
      </>
    );
  }
}

export default Links;
