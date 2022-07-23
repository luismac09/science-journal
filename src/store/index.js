import { defineStore } from 'pinia'

export const useJournalStore = defineStore('journal', {
  state: () => {
    return {
      posts: [
        {
          id: new Date().getTime(),
          date: Date.now(),
          text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
        explicabo vitae sit quidem? Magnam, voluptatum nisi maxime soluta error
        unde provident odio obcaecati sit optio quas nostrum nobis, consequatur
        repellendus!`,
          title: 'Post one',
          picture: null
        },
        {
          id: new Date().getTime() + 1000,
          date: Date.now(),
          text: `In nostrud nostrud officia pariatur enim. Mollit dolore labore ullamco
          excepteur occaecat. Fugiat qui fugiat laborum nostrud. Et dolor elit non excepteur
          esse Lorem velit excepteur tempor cillum reprehenderit exercitation aliqua ipsum.
          Cillum veniam magna elit ullamco.`,
          title: 'Post two',
          picture: null
        },
        {
          id: new Date().getTime() + 2000,
          date: Date.now(),
          text: `Eiusmod est irure magna ipsum anim laboris occaecat cillum nostrud eiusmod enim
          culpa cillum. Veniam minim duis proident eu quis incididunt id laborum minim occaecat 
          nulla veniam. Adipisicing quis laborum labore amet excepteur reprehenderit et. Dolor 
          ipsum enim elit sit. Officia cupidatat dolor irure magna tempor duis occaecat.`,
          title: 'Post three',
          picture: null
        }
      ]
    }
  },
  getters: {
    getPostByTerm:
      state =>
      (term = '') => {
        if (term.length === 0) return state.posts
        return state.posts.filter(post =>
          post.title.toLowerCase().includes(term.toLowerCase())
        )
      }
  }
})
