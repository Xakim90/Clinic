import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';

// https://github.com/daviferreira/react-sanfona#options--proptypes

const accordionElements = {

  allowMultiple: false,
  isHovered: false,
  openNextAccordionItem: false,
  className: 'bg-white p-2 text-dark border',
  style: null,
  duration: 300,
  easing: 'ease',

}

const accordionItem = {
  title: 'al;skdkal;kdl;aksdlkasl;dks',
  expanded: false,
  onExpand: null,
  className: 'bg-light p-2 text-dark',
}


const datas = {
  height: 75,
  weight: 135,
  bmi: 20.5,
  bp: {
    1: 114,
    2: 75
  },
  t: 36.6,
  p: 75,
  rr: 19
}


class PatientAlerts extends React.Component {


  render() {

    return (
      <Accordion className={accordionElements.className} duration={accordionElements.duration}>
        {[1].map(item => {
          return (
            <AccordionItem key={item.toString} className="bg-danger text-white h6" title="Patient Alerts" expanded={item === 1}>
              <div title={accordionItem.title} className={accordionItem.className}>
                <h6 className="font-weight-bold">Height: {datas.height}
                  <span className="font-weight-italic">m</span>
                </h6>
                <h6 className="font-weight-bold">Weight: {datas.weight}
                  <span className="font-weight-italic">kg</span>
                </h6>
                <h6 className="font-weight-bold">BMI: {datas.bmi}</h6>
                <h6 className="font-weight-bold">Bp: {datas.bp[1] + '/' + datas.bp[2]}</h6>
                <h6 className="font-weight-bold">T: {datas.t} ^C</h6>
                <h6 className="font-weight-bold">P: {datas.p}</h6>
                <h6 className="font-weight-bold">RR: {datas.rr}</h6>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    );
  }
}

export default PatientAlerts;