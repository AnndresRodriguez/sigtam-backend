const date = new Date()
const formatDate = {

    date: () => { return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`},
    hour: () => { return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}

}

export default formatDate;