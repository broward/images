<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Meme Miner Ideas</TITLE>

<c:import url="/meta.jsp"/>

</HEAD>
<BODY>

<c:import url="/navigation.jsp"/>

<div id="content">
	<div id="title">
		<B>Meme Miner Potential</B>
		<HR WIDTH=90% SIZE=3 ALIGN="left">
	</div><p>

	<div id="fulltext">
		<p>The original data source (Dejanews.com) is increasingly uncompetitive against RSS feeds, in granularity, popularity and latency.
		A new version is needed which accepts RSS feeds and maintains a historical database.
		</p>
	</div>
	
	<div id="fulltext">
		<p>
		Possible development ideas:<br/>
		
		<ul>
		<li> Note the upward spike of hype just prior to <a href="<%= cPath %>/dailymeme/2005/Aug/superbowl39Dejanews.png">superbowl</a>.<br/>
		       Do comparisons to previous events for last-minute adjustments of staff and food stocking.</li><p/>
		
		<li> Real-time company <a href="<%= cPath %>/evilindex/corporations/googleDejanews.png">reputation management.</a></li><p/>
		
		<li> Salary negotation tool for <a href="<%= cPath %>/evilindex/celebrities/billgatesDejanews.png">celebrities, agents and studios.</a></li><p/>
		
		<li> Cheap alternative for estimating size & severity of <a href="<%= cPath %>/dailymeme/2005/Aug/coughfeverDejanews.png">flu epidemics.</a></li><p/>
		
		<li> Feedback tool for effectiveness of <a href="<%= cPath %>/dailymeme/2005/Aug/smashingpumpkinsDejanews.png">advertising</a> and political campaigns.</li><p/>
		
		<li> Sell access to RSS historical data.  One disadvantage of current search engines is their myopic focus on the present.</li></p>
		</ul>
	</div>

</div>
</BODY>
</HTML>
