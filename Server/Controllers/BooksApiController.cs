namespace JB.Backoffice.GlobalTrade
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Web.Http;
    using Umbraco.Core.Logging;
    using Umbraco.Core.Scoping;
    using Umbraco.Web.Editors;
    using Umbraco.Web.Mvc;

    [PluginController("globaltrade")]
    [JsonCamelCaseFormatter]
    public class BooksApiController : UmbracoAuthorizedJsonController, IBooksRepository
    {
        private IBooksRepository booksRepository;
        private ILogger log;
        public BooksApiController( ILogger log)
        {
            booksRepository = new BooksRepository();
            this.log = log;
        }
        public IQueryable<Book> Query
        {
            get
            {
                return booksRepository.Query;
            }
        }

        [HttpPost]
        public Book Create(Book item)
        {
            log.Info<BooksApiController>("Create Book:" + item.ToString());
            booksRepository.Create(item);
            return item;
        }

        [HttpDelete]
        public void Delete(int id)
        {
            booksRepository.Delete(id);
        }

        public bool Exists(int id)
        {
            return booksRepository.Exists(id);
        }

        public Book Get(int id)
        {
            return booksRepository.Get(id);
        }

        public IEnumerable<Book> GetAll()
        {
            return booksRepository.GetAll();
        }

        [HttpPut]
        public void Update(Book item)
        {
            booksRepository.Update(item);
        }
    }
}
