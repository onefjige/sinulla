const xmlData = `
<root>
    <study_first_submitted>2024-06-22</study_first_submitted>
</root>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
const firstSubmissionDate = xmlDoc.getElementsByTagName('study_first_submitted')[0].textContent;

console.log(firstSubmissionDate);  // Output: 2024-06-22
