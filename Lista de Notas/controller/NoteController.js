class NoteController{
    constructor(formId, tableId) {
        this.formElement = document.getElementById(formId)
        this.tableElement = document.getElementById(tableId)
        this.onSubmit();
    }

    onSubmit() {

        this.formElement.addEventListener("submit", event => {
            event.preventDefault();

            let user = this.getValues();

            this.addLine(user)
    });

    }

    getValues() {
        let user = {};

        [...this.formElement.elements].forEach(field => user[field.name] = field.value);

        return new User(user.name, user.noteone, user.notetwo, user.notethree);
    }

    addLine(dataUser) {
    
        this.tableElement.innerHTML = `<tr>
        <th>${dataUser.name}</th>
        <th>${dataUser.noteone}</th>
        <th>${dataUser.notetwo}</th>
        <th>${dataUser.notethree}</th>
        <td>
            <button class="delete-student">Delete</button>
            <button class="edit-student">Edit</button>
        </td>
    </tr>`
    
    }
    
}