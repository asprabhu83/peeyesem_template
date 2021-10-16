<template>
  <div class="add-page">
      <div class="PageTitle">
            <div class="ml-3  flex items-center justify-start">
                <input
                    class="
                        shadow-md
                        appearance-none
                        border
                        rounded
                        w-1/2
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    id="name"
                    type="text"
                    placeholder="Page Title"
                    v-model="menuTitle"
                    />
                    <div>
                        <button type="button" 
                        class="bg-blue-500
                        hover:bg-blue-700
                        text-white
                        font-bold
                        py-2
                        px-4
                        add_title_btn
                        flex
                        items-center
                        justify-center
                        mx-4
                        rounded
                        focus:outline-none
                        focus:shadow-outline" >
                        Submit
                        </button>
                    </div>
            </div>
      </div>
      <div>
          <div class="editor_button" v-if="editor">
                <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
                    bold
                </button>
                <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
                    italic
                </button>
                <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
                    strike
                </button>
                <button @click="editor.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
                    code
                </button>
                <button @click="editor.chain().focus().unsetAllMarks().run()">
                    clear marks
                </button>
                <button @click="editor.chain().focus().clearNodes().run()">
                    clear nodes
                </button>
                <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
                    paragraph
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                    h1
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                    h2
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
                    h3
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
                    h4
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
                    h5
                </button>
                <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
                    h6
                </button>
                <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
                    bullet list
                </button>
                <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
                    ordered list
                </button>
                <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
                    code block
                </button>
                <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
                    blockquote
                </button>
                <button @click="editor.chain().focus().setHorizontalRule().run()">
                    horizontal rule
                </button>
                <button @click="editor.chain().focus().setHardBreak().run()">
                    hard break
                </button>
                <button @click="editor.chain().focus().undo().run()">
                    undo
                </button>
                <button @click="editor.chain().focus().redo().run()">
                    redo
                </button>
         </div>
         <editor-content class="editor_box" :editor="editor" />
      </div>
      <div class="save_page_btn_box">
          <button type="button" 
                        class="bg-blue-500
                        hover:bg-blue-700
                        text-white
                        font-bold
                        py-2
                        px-4
                        add_title_btn
                        flex
                        items-center
                        justify-center
                        rounded
                        focus:outline-none
                        focus:shadow-outline" >
                        Save
            </button>
      </div>
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
export default {
    layout:'admin-header-layout',
    components:{
        EditorContent
    },
    data() {
        return {
         editor: null,
         menuTitle:''
        }
    },

    mounted() {
        this.editor = new Editor({
        content: '<p>I’m running tiptap with Vue.js.</p>',
        extensions: [
            StarterKit,
        ],
      })
    },

    beforeDestroy() {
        this.editor.destroy()
    },
}
</script>

<style scoped>
.add-page{
    margin:50px 0;
}
.editor_button{
    width: 60%;
    margin:30px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.PageTitle{
    width: 60%;
    margin:60px auto;
}
.save_page_btn_box{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
}
.editor_button button{
    padding:5px 15px;
    border-radius: 5px;
    background: #002c5f;
    color: white;
    margin:10px;
    outline: none;
    border: none;
    cursor: pointer;
}
.editor_box{
    width: 60%;
    margin: 40px auto;
    border:1px solid black;
}
.editor_box .ProseMirror{
    height: 400px!important;
}
</style>