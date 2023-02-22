const navList = document.getElementById('nav__list')
const applyForm = document.getElementById('applyForm')
const applyModal = document.getElementById('applyModal')
const submittedModal = document.getElementById('submittedModal')

function dropDown() {
    navList.toggleAttribute('data-visible')
}
function openApply() {
    applyModal.showModal()
    applyModal.style.opacity = "100%"
}
function closeApply() {
    const values = [
        applyForm.fname.value,
        applyForm.lname.value,
        applyForm.email.value,
        applyForm.phone.value,
        applyForm.resume.value
    ].filter(x => {return x !== ""})

    if (values.length !== 0) {
        if (!window.confirm("Warning: Closing will erase entered information")) {
            return
        }
    }

    applyModal.close()
    applyModal.style.opacity = "0%"
    for (let i in ["fname", "lname", "email", "phone", "resume"]) {
        applyForm[i].value = ""
    }
    
}
function closeSubmitted() {
    submittedModal.close()
    alert("NOTE: there is no backend to send the form data to, so the received information has been logged to the console")
}

applyForm.addEventListener('submit', e => {
    e.preventDefault()
    const response = {
        fname: applyForm.fname.value,
        lname: applyForm.lname.value,
        email: applyForm.email.value,
        phone: applyForm.phone.value,
        resume: applyForm.resume.value
    }

    // Front-End only, there is no back-end so the collected data is printed out
    console.log(response);

    // new
    applyModal.close()
    applyModal.style.opacity = "0%"
    submittedModal.showModal()
})