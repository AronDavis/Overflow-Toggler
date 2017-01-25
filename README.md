```html
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous">
</script>
<link rel="stylesheet" type="text/css" href="https://raw.githubusercontent.com/AronDavis/Overflow-Toggler/master/OverflowToggler.css">
<script src="https://raw.githubusercontent.com/AronDavis/Overflow-Toggler/master/OverflowToggler.js"></script>
<style>
  .classThatDefinesMaxHeight
  {
    max-height: 100px;
  }
</style>
<div>
  <p>
    To set up Overflow Toggler, you'll need to include JQuery, OverflowToggler.js, and OverflowToggler.css.
  </p>
  <p>
    Create a DOM element with the class "overflowToggler" and a max-height set (via class or direct property).

    <p>
      <h3>Option 1</h3>
      <p><code>
        &lt;style&gt;<br/>
          <span style="margin-left: 15px; display: inline-block;">
            .classThatDefinesMaxHeight<br/>
            {<br/>
              <span style="margin-left: 15px">max-height: 100px;<br/></span>
            }
          </span>
          <br/>
        &lt;/style&gt;<br/><br/>
        &lt;div class=&quot;overflowToggler classThatDefinesMaxHeight&quot;&gt;
        <br/>
        <span style="margin-left: 15px;">Content goes here.</span>
        <br/>
        &lt;/div&gt;
      </code></p>
      <div style="width:500px;">
        <div class="overflowToggler classThatDefinesMaxHeight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est ipsum, cursus a bibendum vitae, malesuada sit amet ex. Sed pretium nibh ut ex consequat, sed interdum ipsum iaculis. Sed vel lacus gravida, tincidunt nisl et, finibus nisi. Aenean aliquam turpis scelerisque metus scelerisque, et sollicitudin nibh placerat. Duis aliquam pharetra facilisis. Ut eleifend dictum purus eu egestas. Aenean fringilla mattis ante ac consectetur.
        </div>
      </div>


      <h3>Option 2</h3>
      <p><code>
        &lt;div class=&quot;overflowToggler&quot; style=&quot;max-height: 100px;&quot;&gt;
        <br/>
        <span style="margin-left: 15px;">Content goes here.</span>
        <br/>
        &lt;/div&gt;
      </code></p>
      <div style="width:500px;">
        <div class="overflowToggler" style="max-height: 100px;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est ipsum, cursus a bibendum vitae, malesuada sit amet ex. Sed pretium nibh ut ex consequat, sed interdum ipsum iaculis. Sed vel lacus gravida, tincidunt nisl et, finibus nisi. Aenean aliquam turpis scelerisque metus scelerisque, et sollicitudin nibh placerat. Duis aliquam pharetra facilisis. Ut eleifend dictum purus eu egestas. Aenean fringilla mattis ante ac consectetur.
        </div>
      </div>
    </p>
  </p>

</div>
```
