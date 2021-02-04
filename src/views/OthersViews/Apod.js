import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, APY_KEY } from '../../constants/index'
import dummyData from '../../constants/dummy'
import Title from '../../components/Title'
import Image from '../../components/Image'
import Video from '../../components/Video'
import Text from '../../components/Text'
import CloseButton from '../../components/CloseButton'

const Apod = ({ setView }) => {

    const [dataApod, setDataApod] = useState({})

    const fetchData = () => {
        axios.get(`${BASE_URL}?api_key=${APY_KEY}`)
            .then(res => {
                setDataApod(res.data)
            })
            .catch(err => {
                setDataApod(dummyData)
                console.log('We just ran out of petitions')
            })
    }

    useEffect(fetchData, [])

    console.log('Epa!', dataApod)

    return (
        <div className="Apod">
            <Title title={dataApod.title} subTitle={'Astronomy Picture of the Day'} />
            {
                dataApod.media_type == 'video' ? <Video src={dataApod.url} /> : <Image src={dataApod.url} alt={dataApod.title} date={dataApod.date} />
            }
            <Text text={dataApod.explanation} />
            <CloseButton setView={setView} />
        </div>
    )
}

export default Apod;