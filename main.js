document.querySelector('button').addEventListener('click', getPigeon)

function getPigeon() {

let bird = document.querySelector('input').value

    fetch(`https://xeno-canto.org/api/2/recordings?query=${bird}`)

    .then(res => res.json())
    .then(data => {

    console.log(data.recordings[0].file)
    console.log(data.recordings)

        document.querySelector('#your-bird').innerHTML = data.recordings[0].en
        document.querySelector('#genus').innerHTML = data.recordings[0].gen
        document.querySelector('#species').innerHTML = data.recordings[0].sp
        document.querySelector('#sub-species').innerHTML = data.recordings[0].ssp
        document.querySelector('#audio').src = data.recordings[0].file

    })
    .catch(err => {
        console.log(`error ${err}`)

    });

}