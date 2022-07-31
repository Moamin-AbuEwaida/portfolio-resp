import {useState, useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {ArrowRightCircle} from 'react-bootstrap-icons'
import HeaderImg from '../assets/img/header-img.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);

    const toRotate = ['web developer', 'web designer', 'ui-ux designer'];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return ()=> { clearInterval(ticker)};
    },[text]);

    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    };

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-item-center'>
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {
                        ({isVisible})=>
                        <div className={isVisible ? 'animate__animated animate__fadiIn' : ''}>
                            <span className='tagline'>Welcome to my Portfolio</span>
                            <h1>{"Hi I'm Moamin "}<span className='wrap'>{text}</span></h1>
                            <p>jhwf jsdhfa kjasdfh skjfdhskajhfasjk kjash kasjh ksjdhfkwjg8qwyf qwegf qwhgfe kgf jkqwgfjk </p>
                            <button onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle size={25}/> </button>
                        </div>
                    }
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                    {
                        ({isVisible}) => 
                        <div className={isVisible ? 'animate__animated animate__zoomIn': ''}>
                            <img src={HeaderImg} alt='Header Img' />
                        </div>
                    }
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner