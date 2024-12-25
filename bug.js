```javascript
<div class="flex items-center">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Button
  </button>
  <p>Some text</p>
</div>
```
This code produces an unexpected layout because the button has inline content which takes up space and pushes the paragraph away from the button.  The problem is that by default, Flexbox items stretch to fill the available space, so the button expands to its available width.