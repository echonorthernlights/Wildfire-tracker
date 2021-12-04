import {Icon} from "@iconify/react"
import locationIcon from "@iconify/icons-mdi/fire-alert"

import React from 'react'

const LocationMarker = ({lat, lng, onClick}) => {
    return (
        <div className="location-marker">
            <Icon icon={locationIcon} className="location-icon" onClick={onClick}/>
        </div>
    )
}

export default LocationMarker
