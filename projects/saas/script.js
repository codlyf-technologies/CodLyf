document.addEventListener('DOMContentLoaded', function () {
    const codeTabs = document.querySelectorAll('.code-tabs button');
    const codeContent = document.querySelector('.code-content pre code');

    const codeSnippets = {
        'React': `import React from 'react';

const User = () => {
    const { Button } = conxl;
    return <Button>Click Me</Button>;
};

export default User;`,
        'Vue': `<template>
  <button @click="handleClick">{{ message }}</button>
</template>

<script>
export default {
  data() {
    return {
      message: 'Click Me'
    };
  },
  methods: {
    handleClick() {
      alert('Clicked!');
    }
  }
};
</script>`,
        'Python': `# Example Python code
def greet(name):
    print(f"Hello, {name}!")

greet("World")`
    };

    // Set the initial active tab and content (default to the first tab)
    if (codeTabs.length > 0) {
        codeTabs[0].classList.add('active');
        const initialLanguage = codeTabs[0].textContent;
        if (codeSnippets[initialLanguage]) {
            codeContent.textContent = codeSnippets[initialLanguage];
        }
    }

    codeTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            codeTabs.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked tab
            this.classList.add('active');

            // Update code content based on the clicked tab's text
            const language = this.textContent;
            if (codeSnippets[language]) {
                codeContent.textContent = codeSnippets[language];
            }
        });
    });
});