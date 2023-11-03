# https://www.rdocumentation.org/packages/stopwords/versions/2.3
library(stopwords)
library(methods)
library(rjson)

args = commandArgs(trailingOnly=TRUE)

library(rjson)
data <- list(
  sources=list()
)

for (source in stopwords::stopwords_getsources()) {
  data["sources"][[1]][source][[1]] <- list()
  
  for (lang in stopwords::stopwords_getlanguages(source)) {
    data["sources"][[1]][source][[1]][lang][[1]] <- stopwords::stopwords(lang, source = source)
  }
}

write(toJSON(data), args[[1]])
