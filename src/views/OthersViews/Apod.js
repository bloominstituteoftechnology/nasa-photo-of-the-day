import React from 'react'
import Title from '../../components/Title'
import Image from '../../components/Image'
import Text from '../../components/Text'
import CloseButton from '../../components/Text'

const Apod = () => {
    return (
        <div className="Apod">
            <Title title='Found on the Moon: Candidate for Oldest Known Earth Rock' subTitle='Astronomy Picture of the Day' />
            <Image src='https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' alt='I am an extra text' credits='Video Credit: NASA, Astromaterials 3D, Erika Blumenfeld et al.' />
            <Text />
            <CloseButton />
        </div>
    )
}

export default Apod;