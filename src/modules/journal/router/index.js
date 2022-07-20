export default {
  name: 'journal',
  component: () => import('@/modules/journal/layouts/JournalLayout.vue'),
  children: [
    {
      path: '',
      name: 'no-post',
      component: () => import('@/modules/journal/views/NoPost.vue')
    },
    {
      path: ':id',
      name: 'edit-post',
      component: () => import('@/modules/journal/views/EditPost.vue')
    }
  ]
}
