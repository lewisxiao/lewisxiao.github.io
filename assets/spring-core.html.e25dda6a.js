import{_ as r,r as i,o as s,c,a as e,d as t,e as a,b as o}from"./app.ad464663.js";const p={},l=a('<h5 id="ioc\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#ioc\u5BB9\u5668" aria-hidden="true">#</a> IoC\u5BB9\u5668</h5><p>DI\u6CE8\u5165\u7684\u4E24\u79CD\u5F62\u5F0F</p><ul><li>\u6784\u9020\u51FD\u6570\u6CE8\u5165</li><li>setter\u6CE8\u5165</li></ul><p>\u90A3\u8981\u4F7F\u7528\u6784\u9020\u51FD\u6570\u6CE8\u5165\uFF0C\u8FD8\u662Fsetter\u6CE8\u5165\uFF1F</p><blockquote><p>\u5BF9\u4E8E\u5FC5\u987B\u7684\u4F9D\u8D56\uFF0C\u4F7F\u7528\u6784\u9020\u51FD\u6570\u6CE8\u5165\uFF1B\u5BF9\u4E8E\u53EF\u9009\u7684\u4F9D\u8D56\uFF0C\u4F7F\u7528setter\u6CE8\u5165\u3002\u6784\u9020\u51FD\u6570\u6CE8\u5165\uFF0C\u53EF\u4EE5\u6709\u6548\u907F\u514D\u4F9D\u8D56\u7684\u5BF9\u8C61\u4E3Anull\uFF0C\u4E14\u90FD\u88AB\u6709\u6548\u5730\u521D\u59CB\u5316\u4E86\u3002setter\u6CE8\u5165\uFF0C\u5728\u522B\u5904\u4F7F\u7528\u65F6\uFF0C\u53EF\u80FD\u8981\u82B1\u5F88\u591A\u65F6\u95F4\u53BB\u68C0\u67E5\u662F\u5426\u4E3Anull\u3002</p></blockquote><p>\u4EC0\u4E48\u662F\u5FAA\u73AF\u4F9D\u8D56\uFF0C\u5982\u4F55\u89E3\u51B3\u5FAA\u73AF\u4F9D\u8D56\uFF1F</p><blockquote><p>\u5047\u5982\u6709\u4E24\u4E2A\u7C7B, classA \u548C classB\uFF0CclassA\u4E2D\u4F9D\u8D56\u4E86classB\uFF0CclassB\u4E2D\u4F9D\u8D56\u4E86classA\uFF0C\u8FD9\u5C31\u662F\u5FAA\u73AF\u4F9D\u8D56\u3002\u5982\u679C\u4F7F\u7528\u7684\u662F\u6784\u9020\u51FD\u6570\u6CE8\u5165\uFF0Cspring\u4F1A\u5728\u542F\u52A8\u65F6\uFF0C\u68C0\u6D4B\u5230\u8FD9\u4E2A\u9519\u8BEF\uFF0C\u5E76\u629B\u51FA<code>BeanCurrentlyInCreationException</code>\u5F02\u5E38\u3002\u89E3\u51B3\u65B9\u6CD5\u662F\u4F7F\u7528setter\u6CE8\u5165\uFF0C\u4E0D\u4F7F\u7528\u6784\u9020\u51FD\u6570\u6CE8\u5165\u3002</p></blockquote><p>Spring\u521D\u59CB\u5316\uFF0C\u542F\u52A8\u65F6\uFF0C\u4F1A\u5F00\u542F\u591A\u5C11\u4E2AIoC\u5BB9\u5668\uFF1F</p><p>Ganf of Four(GoF) patterns</p><p>Spring\u4E2D\uFF0Cbean\u7684Scope\u6709\u591A\u5C11\u79CD?</p><blockquote><p>\u5728Spring\u4E2D\uFF0C\u5171\u67096\u4E2Dscope\uFF0C\u4E3B\u8981\u7684\u4E24\u79CD\u662Fsingleton\u548Cprototype\u3002\u4F7F\u7528\u7684\u539F\u5219\u662F\uFF1A\u5BF9\u4E8E\u65E0\u72B6\u6001\u7684\u5BF9\u8C61\uFF0C\u4F7F\u7528singleton\uFF0C\u5BF9\u4E8E\u6709\u72B6\u6001\u7684\u5BF9\u8C61\uFF0C\u4F7F\u7528prototype\u3002\u8865\u5145\u4E00\u70B9\uFF1Abean\u90FD\u662F\u6709\u751F\u547D\u5468\u671F\u7684\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684scope\u3002</p></blockquote><p>bean\u7684\u914D\u7F6E\uFF0C\u652F\u6301\u6CE8\u89E3\u548Cxml\u914D\u7F6E\uFF0C\u4E24\u8005\u76F8\u6BD4\u5404\u81EA\u6709\u4EC0\u4E48\u7279\u70B9\uFF1F</p><blockquote><p>\u6CE8\u89E3\u66F4\u7B80\u6D01\uFF0C\u4F46\u662F\u4F1A\u5206\u6563\u5230\u5404\u4E2A\u7C7B\u4E2D\uFF0C\u800C\u4E14\u6BCF\u4E00\u4E2A\u4FEE\u6539\uFF0C\u90FD\u9700\u8981\u91CD\u65B0\u7F16\u8BD1\u3002</p></blockquote><blockquote><p>xml\u5197\u957F\uFF0C\u4F46\u662F\u5F88\u96C6\u4E2D\uFF0C\u5F88\u5BB9\u6613\u770B\u6E05\u5404\u4E2Abean\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4FEE\u6539\u4E0D\u9700\u8981\u91CD\u65B0\u7F16\u8BD1\u3002</p></blockquote>',14),d={href:"https://www.mkyong.com/spring/spring-autowiring-by-name/",target:"_blank",rel:"noopener noreferrer"},u=o("autowire by name\u7684\u89E3\u91CA"),h={href:"https://www.mkyong.com/spring/spring-autowiring-by-type/",target:"_blank",rel:"noopener noreferrer"},b=o("autowire by type\u7684\u89E3\u91CA"),g=a('<p>Bean\u6709id\uFF0Cname\uFF0C\u90A3id\u548Cname\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F</p><blockquote><p>IoC\u5BB9\u5668\u6839\u636Eid\u6216\u8005name\u67E5\u627E\u3001\u5B9A\u4F4DBean\u3002id\u53EA\u80FD\u6709\u4E00\u4E2A\uFF0Cname\u53EF\u4EE5\u6709\u591A\u4E2A\u3002\u5728IoC\u5BB9\u5668\u4E2D\uFF0C\u4E0D\u540C\u7684bean\uFF0Cid\u6216\u8005name\u4E00\u5B9A\u662F\u552F\u4E00\u7684\u3002</p></blockquote><p>Spring\u4E2D\u4E00\u4E9B\u5E38\u7528\u7684\u6CE8\u89E3</p><blockquote><p>@Bean\u3001@Autowired\u3001@Resource\u3001@Concifugration\u3001@Primary\u3001@Component\u3001@Repository\u3001@Service\u3001@Controller\u3001@Component</p></blockquote><p>Bean\u7684\u751F\u547D\u5468\u671F\u662F\u600E\u6837\u7684\uFF1F\u5982\u4F55\u53BB\u590D\u5199\u8FD9\u4E9B\u751F\u547D\u5468\u671F\uFF1F</p><p><code>@Bean</code>\u6CE8\u89E3\u7684\u542B\u4E49\u662F\u4EC0\u4E48\uFF1F</p><blockquote><p>The @Bean annotation is used to indicate that a method instantiates, configures, and initializes a new object to be managed by the Spring IoC container.</p></blockquote><p><code>@Configuration</code>\u6CE8\u89E3\u7684\u542B\u4E49\u662F\u4EC0\u4E48\uFF1F</p><blockquote><p>Annotating a class with @Configuration indicates that its primary purpose is as a source of bean definitions. Furthermore, @Configuration classes let inter-bean dependencies be defined by calling other @Bean methods in the same class.</p></blockquote><p>Bean\u6709\u52A0\u8F7D\u987A\u5E8F\u5417\uFF1F\u5982\u679C\u6709\uFF0C\u6211\u4EEC\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u53BB\u63A7\u5236\u8FD9\u4E2A\u987A\u5E8F\u3002</p><p>Java\u7684ClassLoader\u4E4B\u53CC\u4EB2\u59D4\u6258\u3002</p><blockquote><p>\u4ECE\u4E0B\u81F3\u4E0A\u59D4\u6258\uFF0C\u4ECE\u4E0A\u81F3\u4E0B\u67E5\u627E\u3002\u4ECE\u4E0B\u5F80\u4E0A\u8D70\u65F6\uFF0C\u5148\u67E5\u627E\u7F13\u5B58\uFF0C\u7F13\u5B58\u5982\u679C\u6CA1\u6709\u547D\u4E2D\uFF0C\u5219\u59D4\u6258\u7ED9\u7236\u52A0\u8F7D\u5668\uFF08\u4E0D\u4E00\u5B9A\u662F\u7236\u7C7B\uFF09\u3002\u6700\u540E\u7531\u7236\u52A0\u8F7D\u5668\u5C42\u5C42\u8FD4\u56DE\u3002</p></blockquote><h5 id="resources" tabindex="-1"><a class="header-anchor" href="#resources" aria-hidden="true">#</a> Resources</h5><h5 id="validation-data-binding-and-type-conversion" tabindex="-1"><a class="header-anchor" href="#validation-data-binding-and-type-conversion" aria-hidden="true">#</a> Validation, Data Binding and Type Conversion</h5><h5 id="spring-expression-language-spel" tabindex="-1"><a class="header-anchor" href="#spring-expression-language-spel" aria-hidden="true">#</a> Spring Expression Language(SpEL)</h5><h5 id="aspect-oriented-programming" tabindex="-1"><a class="header-anchor" href="#aspect-oriented-programming" aria-hidden="true">#</a> Aspect Oriented Programming</h5><h5 id="srping-data-access" tabindex="-1"><a class="header-anchor" href="#srping-data-access" aria-hidden="true">#</a> Srping Data Access</h5><p>\u4EC0\u4E48\u662F\u5168\u5C40\u4E8B\u52A1\u3001\u672C\u5730\u4E8B\u52A1\uFF1F</p>',18),_={href:"http://www.hollischuang.com/archives/1678",target:"_blank",rel:"noopener noreferrer"},m=o("Java\u4E2D\u7684\u4E8B\u52A1\u2014\u2014\u5168\u5C40\u4E8B\u52A1\u4E0E\u672C\u5730\u4E8B\u52A1"),k=e("p",null,"\u58F0\u660E\u5F0F\u4E8B\u52A1\u4E0E\u7F16\u7A0B\u5F0F\u4E8B\u52A1",-1),f=e("blockquote",null,[e("p",null,"\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u63A8\u8350\u4F7F\u7528\u58F0\u660E\u5F0F\u4E8B\u52A1")],-1),q=e("p",null,"Java\u4E2D\u7684\u4E8B\u52A1\u6709\u54EA\u51E0\u79CD\uFF1F\u5206\u5E03\u5F0F\u4E8B\u52A1\u7684\u89E3\u51B3\u65B9\u6848\u6709\u54EA\u51E0\u79CD\uFF1F",-1),y=o("JDBC\u4E8B\u52A1\u3001JTA(Java Transaction API)\u4E8B\u52A1\u3001\u5BB9\u5668\u4E8B\u52A1\u3002"),x={href:"http://www.hollischuang.com/archives/1658",target:"_blank",rel:"noopener noreferrer"},C=o("Java\u4E2D\u7684\u4E8B\u52A1\u2014\u2014JDBC\u4E8B\u52A1\u548CJTA\u4E8B\u52A1"),w=a("<p>SPI--Service Provider Interface</p><p>Spring\u4E2D\u8DDF\u4E8B\u52A1\u76F8\u5173\u7684\u51E0\u4E2A\u91CD\u8981\u62BD\u8C61\u7C7B</p><blockquote><p>PlatformTransactionManager\u3001TransactionStatus\u3001TransactionDefinition\u3001TransactionException</p></blockquote><p>\u4E8B\u52A1\u7684\u9ED8\u8BA4\u914D\u7F6E\u662F\u600E\u6837\u7684\uFF1F</p><blockquote><p>The propagation setting is REQUIRED.<br> The isolation level is DEFAULT.<br> The transaction is read-write.<br> The transaction timeout defaults to the default timeout of the underlying transaction system or none if timeouts are not supported.<br> Any RuntimeException triggers rollback, and any checked Exception does not.</p></blockquote><p>\u51E0\u4E2A\u6CE8\u89E3</p><blockquote><p>@import: \u901A\u8FC7\u5BFC\u5165\u7684\u65B9\u5F0F\uFF0C\u628A\u5B9E\u4F8B\u6CE8\u5165\u5230Spring IOC\u5BB9\u5668\u4E2D\u3002\u67E5\u770B@import\u7684\u6E90\u4EE3\u7801\u53EF\u4EE5\u53D1\u73B0\uFF0C\u8FD9\u4E2A\u6CE8\u89E3\u53EA\u80FD\u7528\u5728\u7279\u5B9A\u7684\u7C7B\u4E0A\u3002</p></blockquote>",7);function v(B,S){const n=i("ExternalLinkIcon");return s(),c("div",null,[l,e("p",null,[e("a",d,[u,t(n)])]),e("p",null,[e("a",h,[b,t(n)])]),g,e("blockquote",null,[e("p",null,[e("a",_,[m,t(n)])])]),k,f,q,e("blockquote",null,[e("p",null,[y,e("a",x,[C,t(n)])])]),w])}const I=r(p,[["render",v],["__file","spring-core.html.vue"]]);export{I as default};
