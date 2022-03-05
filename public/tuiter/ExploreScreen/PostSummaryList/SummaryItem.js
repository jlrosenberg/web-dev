const SummaryItem = (post) => {
  const topic = post.topic
    ? `<div class="post-topic light-gray-font">${post.topic}</div>`
    : ``;
  const author = post.userName
    ? `<strong>${post.userName}</strong> <i class="fas fa-check-circle"> </i><span class="light-gray-font">&nbsp;· </span>`
    : "";
  const tweets = post.tweets
    ? `<div class="light-gray-font">${post.tweets} tueets</div>`
    : "";

  return `
      <li class="list-group-item">
      <div class="row">
        <div class="col-10">
          ${topic}
          <div>
            ${author}
            <span class="light-gray-font">${post.time}</span>
          </div>
          <div>
            <strong>
              ${post.title}
            </strong>
          </div>
          ${tweets}
        </div>
        <div class="col-2">
          <img
            src="${post.image}"
            class="img-fluid"
            style="min-width: 100%"
          />
        </div>
      </div>
    </li>
    `;
};

export default SummaryItem;
