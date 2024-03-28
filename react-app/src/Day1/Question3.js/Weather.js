export default function Weather({temp}){
    let message ="";
    if(temp>25){
        message = "It's sunny today!";
    }
    else if(temp<10){
        message="It's cold today!";
    }
    else{
        message="It's neither hot nor cold";
    }
    return(
        <div>
            {message}
        </div>
    )
}