import React, { FC } from 'react'


interface Bio {
    name: string
    email: string
    profession: string
}

const MyBio: FC<Bio> = () => {
    return (
        <div>MyBio</div>
    )
}
export default MyBio
