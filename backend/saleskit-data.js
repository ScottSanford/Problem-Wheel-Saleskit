angular.module('saleskitApp').run(function($httpBackend) {

  var saleskitData = [
                          {
                            "title": "Informative Selling",
                            "id": "informativeselling",
                            "photo": "images/blue-shirt-guy.jpg",
                            "definition": "The company uses data driven content to sell their product.",
                            "drivers": [{"text": "The company is in a highly competitive space - SKU proliferation makes it hard to differentiate their products."},
                                        {"text": "The marketing message can be degraded because of a stratified selling force."},
                                        {"text": "Control of the message is often handed-off to a third party."}
                            ],
                            "approaches": [{"text": "A large beverage producer relies on distributors to sell their product. The distributors are independent of the organization and can sell competitor products as well. Because of this, the company has to compete for share of voice with their own selling organization. The message must be consistent and complete by the time it reaches the customer. There is a need to shift focus back to their own products and enable distributors to sell in an engaging manner."}],
                            "outcomes": [{"text": "Mediafly's interactive selling tool elevated distributors from order takers to consultants:",
                                "subbullets": [{"text": "The tool provided customers a better understanding of their competitive landscape via adaptive content."},
                                               {"text": "Profitability calculators identify where the customer can increase margins."},
                                               {"text": "This shifted the prior focus from promotion based selling to margin analyses."}
                                ]
                                },       
                                        {"text": "Reporting gave the company insight into how the distributors where selling their products; whereas, this was not possible before Mediafly." 
                                        },
                                        {"text": "This tool was pivotal to a new sales methodology on which all distributors are now being certified." 
                                        }
                            ]
                          },
                          {
                            "title": "Guided Selling",
                            "id": "guidedselling",
                            "photo": "images/Road.jpg",
                            "definition": "Using a dynamic tool the sales person guides the customer through a series of questions and topics, identifying needs and maturity in the sales pipeline.",
                            "drivers": [{
                                "text": "The sales team must efficiently navigate through a complex set of products."},{
                                "text": "Sales pipelines tend to be extended and require a multiplex of decision makers and influencers."},{
                                "text": "Various industries and geographies influence the type of sales interactions."},{
                                "text": "The product knowledge of sales people varies across the team."
                              }
                            ],
                            "approaches": [{"text": "The sales force of a leading enterprise software organization must articulate complex solutions in simple terms.  The messaging also must be customized to the unique needs of varying buying personas.  SalesKit allows Marketing to transition from traditional static content to responsive multimedia.  Through the use of interactive score-carding, the customer and sales person together identify the customer\u2019s business objectives.  SalesKit then surfaces the best products to get them to their goals."}
                            ],
                            "outcomes": [{"text": "SalesKit transforms conversations from one-way presentations to collaborative interactions."},
                                         {"text": "This tool supports the discovery phase of the sales process and ensures every sales rep, regardless of skill level, accurately captures the appropriate information."},
                                         {"text": "SalesKit decreases on-boarding time and gets reps productive faster."},
                                         {"text": "Although there are many other sales tools, SalesKit is their resource of choice because of its reliability and intuitiveness."}
                            ]
                          },
                          {
                            "title": "Scenario Selling",
                            "id": "scenarioselling",
                            "photo": "images/BusinessDocuments.jpg",
                            "definition": "null",
                            "drivers": [{"text": "null"}
                            ],
                            "approaches": [{"text": "null"}
                            ],
                            "outcomes": [{"text": "null"}
                            ]
                          },
                          {
                            "title": "Segmented Selling",
                            "id": "segmentedselling",
                            "photo": "images/WomanInField.jpg",
                            "definition": "Brand managers must create a cohesive message then create variants of that message based on segments:  region, customer type, and promotion category.  This content must be distributed to a geographically dispersed sales force.",
                            "drivers": [{"text": "Content distribution is complex, cumbersome, and inefficient."},
                                        {"text": "Reps lose significant time finding content."},
                                        {"text": "Because territories change frequently, directing the right content to the right person can be confusing."},
                                        {"text": "Content creators spend considerable time ensuring reps have the complete collateral they need."}
                            ],
                            "approaches": [{"text": "A large consumer goods company uses SalesKit to simplify the process of getting the right content in the hands of the field sales reps. They quickly load content into SalesKit, which is integrated with their single sign on system.  This automates the delivery of content incorporating territory changes.  The sales reps access relevant content using their tablets changing the way they interact with clients."}
                            ],
                            "outcomes": [{"text": "SalesKit provides reps with the confidence that their content is relevant and easily accessible."},
                                         {"text": "Clarified what promotions are active and when."},
                                         {"text": "SalesKit introduced a process that saves both content creators and sales reps countless hours."},
                                         {"text": "Due to its success, Leadership made SalesKit the only tool for content distribution."}
                            ]
                          },    
                          {
                            "title": "Prioritized Selling",
                            "id": "prioritizedselling",
                            "photo": "images/lightbulb2.jpg",
                            "definition": "An organization with complex territories prioritizes sales opportunities against overall customer buying potential and most important products within each account.",
                            "drivers": [{"text": "Reps struggle to prioritize highest potential clients.", 
                                        "subbullets": [{"text": "Each territory contains hundreds of accounts, regardless of geographic profile."}]},
                                        {"text": "Accounts range in approach and type.", 
                                        "subbullets": [{"text": "National and regional accounts have repeatable marketing, merchandising, and inventory management plans."}, 
                                                       {"text": "Independent accounts comprise two-thirds of the territories and require more individualized strategies."}
                                        ]},
                                        {"text": "Messaging must be succinct and impactful, because sales interactions occur in minutes and often while the buyer is multi-tasking."}
                            ],
                            "approaches": [{"text": "Mediafly’s solution presents each rep with a geographic overview of nearby accounts using GPS. The system identifies each account’s buying potential directing the rep to the highest value target. Reps can then click into the account to quickly uncover which products are most active, have the highest margin, and are at risk. This guides reps to focus on the most impactful products and ensures a succinct and effective customer interaction."}
                            ],
                            "outcomes": [{"text": "SalesKit transformed an unreliable paper-based process into a dynamically engaging, multimedia experience."},
                                         {"text": "Delivering the program’s data digitally now allows the company to monitor rep participation.", "subbullets": [{"text": "Revenue fluctuations can be attributed to the program’s effectiveness regardless of rep participation."}]}, 
                                         {"text": "Mediafly’s solution ensures a strategic approach by performing territory prioritization for the rep.", 
                                            "subbullets": [{"text": "This allows reps to spend more time selling and less time analyzing."},
                                                           {"text": "Highest value accounts and products are identified based upon datanot intuition."}]}
                            ]
                          },  
                          {
                            "title": "Searchable Selling",
                            "id": "searchableselling",
                            "photo": "images/searchable.jpg",
                            "definition": "Company needs to have access to an overwhelming amount of data, but also needs to quickly pinpoint data in client interactions.",
                            "drivers": [{"text": "The company sells a catalogue of thousands of products which can be overwhelming to the sales reps."},
                                        {"text": "Reps must be prepared to address any question on any product."},
                                        {"text": "Historically, reps carried large binders of product specific sells sheets, that made accessing specific sales sheets difficult."},
                                        {"text": "The inefficiency of this process put forth a disjointed presentation to the client."}
                            ],
                            "approaches": [{"text": "A global manufacturing company struggles with providing effective content for its more than 100,000 products.  SalesKit allows the marketing team to update the content easily across many different content owners.  The regional sales team has access to only the products they are responsible for - in the language that they sell in.  They no longer carry heavy binders, but now have everything readily available on their tablets and laptops.  Online or offline, they access customer testimonial videos, complicated product sell sheets, and any other content they need while presenting to a client."}
                            ],
                            "outcomes": [{"text": "The efficiency SalesKit introduced allowed the sale team to transition from tactical to higher value strategic selling."}, 
                                         {"text": "Previously, content was created by siloed regions; SalesKit brought collaboration and consistency to the headquarters and its disparate regions."},
                                         {"text": "SalesKit decreased print and ship spending and increased confidence that relevant and up to date content is messaged."},
                                         {"text": "Adoption has grown ten fold and now spans a global scale."}
                            ]
                          }
                        ]

  // returns the current list of phones
  $httpBackend.whenGET('/data/saleskit-data.json').respond(saleskitData);
  // adds a new phone to the phones array
  $httpBackend.whenGET(/^partials\//).passThrough();
  //...
});