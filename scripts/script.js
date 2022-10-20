const navList = document.getElementById('nav__list')
const applyForm = document.getElementById('applyForm')
const applyModal = document.getElementById('applyModal')

function dropDown() {
    navList.toggleAttribute('data-visible')
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
    for (let i in ["fname", "lname", "email", "phone", "resume"]) {
        applyForm[i].value = ""
    }
    
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

    // console.log(response);
})