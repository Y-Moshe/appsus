export default {
    props: ['mail'],
    template: `
        <article class="mail-preview clk"
            :class="{starred: mail.isStarred, read: mail.isRead}">
            <div @click.stop="mail.isStarred = !mail.isStarred" class="star clk">
                <i class="fa-regular fa-star star clk"></i>
            </div>
            <h3 class="from">{{ mail.from }}</h3>
            <h3 class="subject">{{ mail.subject }} - </h3>
            <p class="body">{{mail.body}}</p>
            <span class="date">{{ formattedDate }}</span>
            <div class="actions">
                <i class="fa-solid fa-envelope" title="Mark as read"></i>
                <i class="fa-solid fa-envelope-open" title="Mark as unread"></i>
                <i class="fa-solid fa-trash-can clk" title="discard"></i>
            </div>
        </article>
    `,
    computed: {
        formattedDate() {
            const date = new Date(this.mail.sentTimeStamp*1000)
            const options = { day: '2-digit', month: 'short' }
            return date.toLocaleDateString('en-GB', options)
        }
    },
}