import React from "react"
import "../../App.css"
import templaterow from "../../models/templaterow.model"
import will from '../../resources/willandtestament.png'
import pagetemplate from "../../templates/page/page.template"

export default function servicesview(): JSX.Element {
    let list: templaterow[] = [
        {
            imagepath: will,
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna ante, semper ac enim et, ultrices aliquet libero. Nunc id magna elit. Ut varius malesuada urna, commodo consequat ligula posuere viverra. Aliquam lobortis tellus nec ligula eleifend condimentum. Nullam volutpat nisi et sagittis consectetur. Integer fermentum a lorem quis aliquet. In laoreet sed leo et laoreet. Proin lacinia, lectus nec sagittis"
        },
        {
            imagepath: will,
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna ante, semper ac enim et, ultrices aliquet libero. Nunc id magna elit. Ut varius malesuada urna, commodo consequat ligula posuere viverra. Aliquam lobortis tellus nec ligula eleifend condimentum. Nullam volutpat nisi et sagittis consectetur. Integer fermentum a lorem quis aliquet. In laoreet sed leo et laoreet. Proin lacinia, lectus nec sagittis"
        },
        {
            imagepath: will,
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna ante, semper ac enim et, ultrices aliquet libero. Nunc id magna elit. Ut varius malesuada urna, commodo consequat ligula posuere viverra. Aliquam lobortis tellus nec ligula eleifend condimentum. Nullam volutpat nisi et sagittis consectetur. Integer fermentum a lorem quis aliquet. In laoreet sed leo et laoreet. Proin lacinia, lectus nec sagittis"
        }
    ]
    return (pagetemplate("Services", list))
}