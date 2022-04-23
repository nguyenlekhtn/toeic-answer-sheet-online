

const content = document.getElementById('content')

const createRadioBox = (radioName) => {
  const radioInput = document.createElement('input')
  radioInput.setAttribute("type", "radio")
  radioInput.classList.add("box")
  radioInput.setAttribute("name", radioName)
  return radioInput
}

const createRow = (index) => {
  const row = document.createElement("div")
  row.classList.add("row")
  const number = document.createElement("span")
  number.classList.add("number")
  number.textContent = index
  row.append(number)
  for(let i = 0; i < 4; i++) {
    row.append(createRadioBox(index))
  }
  return row



}

const createColumn = (numberOfRows, columnIndex) => {
   const column = document.createElement('div')
   column.classList.add("column")
   for(let i = 1; i <= numberOfRows; i++) {
     column.appendChild(createRow(i + columnIndex*numberOfRows))
   }

   return column
}

const createSection = (title, numberOfColumns, sectionIndex) => {
  const section = document.createElement("div")
  section.classList.add("section")
  section.appendChild(createHeader(title))
  const columns = document.createElement("div")
  columns.classList.add("columns")
  for(let i = 0; i < numberOfColumns; i++) {
    columns.appendChild(createColumn(25, i + sectionIndex * numberOfColumns))
  }
  section.appendChild(columns)
  return section
}

const createHeader = (title) => {
  const h2 = document.createElement("h2")
  h2.textContent = title
  h2.classList.add("sectionHeader")
  return h2
}

const createSheet = (questionNUmber) => {
  content.append(createSection("LISTENING SECTION", 4, 0))
  content.append(createSection("READING SECTION", 4, 1))

}

createSheet()