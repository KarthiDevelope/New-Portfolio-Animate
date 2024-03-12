import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./experience.css";
import work from "../../assets/work.gif"

const Experience = () => {


    return (
        <section id="experience">
            <div className='container'>
                <h2>Experience & Education</h2>
                <VerticalTimeline >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', color: '#fff', border: "1px solid" }}
                        contentArrowStyle={{ borderRight: '5px solid  rgb(33, 150, 243)' }}
                        date="2023 - 2024"
                        iconStyle={{ background: 'linear-gradient(135deg, #282220, #3293DF)', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">React JS Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Coimbatore, TamilNadu</h4>
                        <p>

                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', color: '#fff', border: "1px solid " }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2021 -  2022"
                        iconStyle={{ background: 'linear-gradient(135deg, #282220, #3293DF)', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">Software Tester</h3>
                        <h4 className="vertical-timeline-element-subtitle">NagerCoil, TamilNadu</h4>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', color: '#fff', border: "1px solid " }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2018 - 2021"
                        iconStyle={{ background: 'linear-gradient(135deg, #282220, #3293DF)', color: '#fff' }}

                    >
                        <h3 className="vertical-timeline-element-title">B.com(Computer Application)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Salem, TamilNadu</h4>

                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        iconStyle={{ background: 'linear-gradient(135deg, #282220, #61CF80)', color: '#fff' }}
                    // icon={<StarIcon />}
                    />

                </VerticalTimeline>
            </div>
        </section>
    )
}

export default Experience